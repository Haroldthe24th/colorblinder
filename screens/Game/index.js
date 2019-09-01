import React, { Component } from "react";
import { View, Dimensions, TouchableOpacity,Text, Image} from "react-native";
import { Header } from "../../components";
import styles from "./styles";
import { RBGgenerator, mutateRGB } from '../../utilities';
import { Audio } from 'expo-av';

export default class Home extends Component {

	 state = {
   		points: 0,
   		timeLeft: 15,
	    rgb: RBGgenerator(),
	    size: 2,
	    diffTileIndex: {},
	    diffTileColor: "",
		  gameState: 'INGAME'
 		};
        async componentWillMount(){
          this.generateNewRound();
          this.backgroundMusic = new Audio.Sound();
           this.rightTile = new Audio.Sound();
            try {
                await this.backgroundMusic.loadAsync(
                require("../../assets/music/Komiku_BattleOfPogs.mp3")
                );
                await this.rightTile.loadAsync(
                  require("../../assets/sfx/tile_tap.wav")
                  );
                await this.backgroundMusic.setIsLoopingAsync(true);
                await this.backgroundMusic.playAsync();
                // Your sound is playing!
                 } catch (error) {
     console.log("error")
                 }
               }
 		componentDidMount(){
 			this.interval= setInterval(()=> {
 				if(this.state.gameState === "INGAME") {
                   if(this.state.timeLeft <= 0 ) {
                   	this.setState(state => ({
                        gameState: "LOST"
                   	}))
                   } else {
 				 this.setState(state => ({
 					timeLeft: state.timeLeft - 1
 				}))
 			}
 			}
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
      size: Math.min(Math.max(Math.round(Math.sqrt(points)), 2), 6)
    });
  };
  
  onTilePress =  (rowIndex, columnIndex) => {
  	 if(rowIndex == this.state.diffTileIndex[0] && columnIndex == this.state.diffTileIndex[1]){
  	 	this.rightTile.replayAsync();
      this.setState({
  	 		points: this.state.points + 1,
  	 		timeLeft: this.state.timeLeft + 3
  	 	})
  	 	this.generateNewRound();
  	 } else {
  	 		this.setState({
  	 		timeLeft: this.state.timeLeft - 1
  	 	})
  	 }
  }

  bottomIconPress = async () => {
  	switch(this.state.gameState) {
  		case "INGAME": {
  			this.setState({
  				gameState: "PAUSED"
  			})
  			break;
  		}
  		case "PAUSED": {
  			this.setState({
  				gameState: "INGAME"
  			})
  			break;
  		}
  		case "LOST": {
  			await this.setState({points: 0,timeLeft: 15, size: 2})
  			this.generateNewRound();
       		this.setState({
        	 gameState: "INGAME",
       		})
 
  			break;
  		}

  	}
  }


 render() {
 	const { rgb, size, gameState }  = this.state,
	 	 { width } = Dimensions.get("window"),
	 	 bottomIcon = 
	 	  gameState === "INGAME" 
	 	  ? require("../../assets/icons/pause.png")
	 	  : gameState === "PAUSED"
	 	  ? require("../../assets/icons/play.png")
	 	  : require("../../assets/icons/replay.png");


	 	 console.log("diffTileIndex", this.state.diffTileIndex);
   return (
     <View style={styles.container}>
       <Header fontSize={40} />
       <View style={{ height: width * 0.875, width: width * 0.875, flexDirection:"row"}}>
       {gameState === 'INGAME'? Array(size).fill().map((val, columnIndex)=> (
       	  <View style={{ flex: 1, flexDirection: 'column' }} key={columnIndex}>
          {Array(size).fill().map((val, rowIndex) => (
          	<TouchableOpacity 

          	key={`${columnIndex}.${rowIndex}`}
          	style={{flex: 1, margin: 2, 
          		backgroundColor:
 				 rowIndex == this.state.diffTileIndex[0] && columnIndex == this.state.diffTileIndex[1]
   				 ? this.state.diffTileColor
     			 : `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,}}
          	 	 onPress={() => this.onTilePress(rowIndex, columnIndex)}
          	>
         

          	</TouchableOpacity>
          	))}
          </View>
       	)): gameState === "PAUSED" ?
       (
   	 <View style={styles.pausedContainer}>
       	<Image
         	source={require("../../assets/icons/mug.png")}
         	style={styles.pausedIcon}
       	/>
      	<Text style={styles.pausedText}>COVFEFE BREAK</Text>
    	</View>
 	) : 
       (
      <View style={styles.pausedContainer}>
       	<Image
          	source={require("../../assets/icons/dead.png")}
          	style={styles.pausedIcon}
       	/>
       	<Text style={styles.pausedText}>ur dead</Text>
  	 </View>
       	)
	}
              </View>

       	<View style={styles.bottomContainer}>
       	<View >
         <Text style={styles.bottomContainerTitle}>
         {this.state.points}
         </Text>
         <Text style={styles.bottomContainerSubTitle}>
         points
         </Text>
         <Image 
         source={require("../../assets/icons/trophy.png")}
         style={styles.bottomContainerIcon}>
         	
         </Image>
       	</View>
       	<View >
         <TouchableOpacity  onPress={e => (this.bottomIconPress())}>
         	<Image 
         	style={styles.pauseIcon}
         	source={bottomIcon}
    
		    >
         	</Image>

         </TouchableOpacity>
       	</View>
       	<View >
		<Text style={styles.bottomContainerTitle}>
         {this.state.timeLeft}
         </Text>
         <Text style={styles.bottomContainerSubTitle}>
         time left
         </Text>
         <Image 
         source={require("../../assets/icons/clock.png")}
         style={styles.bottomContainerIcon}>
         	
         </Image>
       	</View>
       	</View>
     </View>
   );
 }
}