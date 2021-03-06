import React, { Component, Fragment} from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { Audio } from 'expo-av';
import { Header } from '../../components';
import styles from "./styles";



export default class Home extends Component {
state = {
	  isSoundOn: true
}

 toggleSound = () => {
 	this.setState({isSoundOn: !this.state.isSoundOn});
 }
 async componentWillMount(){
 	this.backgroundMusic = new Audio.Sound();
 	  this.buttonFX = new Audio.Sound();

 	try { 
 await this.backgroundMusic.loadAsync(
      require("../../assets/music/Komiku_Mushrooms.mp3")
    );
  await this.buttonFX.loadAsync(
       require("../../assets/sfx/button.wav")
    );
    await this.backgroundMusic.setIsLoopingAsync(true);
    await this.backgroundMusic.playAsync();


    // Your sound is playing
 	} catch { 
     console.log("error")
 	}
 }
	render(){
		const soundSource = this.state.isSoundOn === true
		     				? require("../../assets/icons/speaker-on.png")
		     				: require("../../assets/icons/speaker-off.png");
		return (
			<View style={styles.container}>
			<Header/>
			<TouchableOpacity onPress={e => {
				this.onPlayPress;
				this.buttonFX.replayAsync();
				this.backgroundMusic.stopAsync();
				this.props.navigation.navigate('Game');
			}} style={{flexDirection:"row", alignItems: "center"}}>
			<Image
			source={require("../../assets/icons/play_arrow.png")}
			style={styles.playIcon}>				
			</Image>
			<Text style={styles.play}>Play!</Text>
			</TouchableOpacity>
			<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
  			<Image
   			 source={require("../../assets/icons/trophy.png")}
   			 style={styles.trophyIcon}
  			/>
  			<Text style={styles.hiscore}>Hi-score: 0</Text>
			</View>
 			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  			<Image
   			 source={require("../../assets/icons/leaderboard.png")}
   			 style={styles.leaderboardIcon}
  			/>
  			<Text style={styles.leaderboard}>leaderboard</Text>

			</View>
			<View style={styles.bottomContainer}>
			<Text style={[styles.copyrightText, { color: "#E64C3C"}]}>
			    Music: Komiku
			</Text>
			<Text style={[styles.copyrightText, { color: "#F1C431"}]}>
			    SFX: SubspaceAudio
			</Text>
			<Text style={[styles.copyrightText, { color: "#3998DB"}]}>
			    Development: ScriptShock
			</Text>	
			
			</View>
			<View style={styles.bottomRightContainer}>
				<TouchableOpacity onPress={this.toggleSound}>
   				 <Image  style={styles.soundIcon} source={soundSource} />
				</TouchableOpacity>
			</View>
 			</View>
			)
	}
}