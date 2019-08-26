import React, { Component } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { Header } from "../../components";
import styles from "./styles";
import { RBGgenerator, mutateRGB } from '../../utilities';

export default class Home extends Component {
	 state = {
   		points: 0,
   		timeLeft: 15,
	    rgb: RBGgenerator(),
	    size: 2

 		};
        componentWillMount(){
          this.generateNewRound();
        }
 		componentDidMount(){
 			this.interval= setInterval(()=> {
 				console.log("timeLeft", this.state.timeLeft)
 				this.setState(state => ({
 					timeLeft: state.timeLeft - 1
 				}))
 			}, 1000)
 		}
 		componentWillUnmount(){
			clearInterval(this.interval);
 			}
 			 generateSizeIndex = () => {
    return Math.floor(Math.random() * this.state.size);
  };

  generateNewRound = () => {
    const RGB = RBGgenerator();
    const mRGB = mutateRGB(RGB);
    const { points } = this.state;
    this.setState({
      diffTileIndex: [this.generateSizeIndex(), this.generateSizeIndex()],
      diffTileColor: `rgb(${mRGB.r}, ${mRGB.g}, ${mRGB.b})`,
      rgb: RGB,
      size: Math.min(Math.max(Math.round(Math.sqrt(points)), 2), 4)
    });
  };

 render() {
 	const { rgb }  = this.state,
	 	 { width } = Dimensions.get("window"),
	 	 { size } = this.state;
   return (
     <View style={styles.container}>
       <Header fontSize={40} />
       <View style={{ height: width * 0.875, width: width * 0.875, flexDirection:"row"}}>
       {Array(size).fill().map((val, columnIndex)=> (
       	  <View style={{ flex: 1, flexDirection: 'column' }} key={columnIndex}>
          {Array(size).fill().map((val, rowIndex) => (
          	<TouchableOpacity 

          	key={`${columnIndex}.${rowIndex}`}
          	style={{flex: 1, margin: 2, backgroundColor: `rgb(${rgb.r},${rgb.b},${rgb.g})`}}
          	 	 onPress={() => console.log(rowIndex, columnIndex)}
          	>
         

          	</TouchableOpacity>
          	))}
          </View>
       	))}
       	
       </View>
     </View>
   );
 }
}