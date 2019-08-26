import { StyleSheet } from "react-native";


export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0a0a0a",
		justifyContent: "center",
		alignItems: "center"
			},
			play: {
   			fontSize: 45,
   			fontFamily: "dogbyte",
   			color: "#ecf0f1",
   			marginTop: 5
 			},
 			playIcon: {
 			height: 60,
   			width: 60,
   			marginRight: 15
 			},
 			hiscore: {
 			fontSize: 28,
 			color: "#ecf0f1",
    		fontFamily: "dogbyte",
    		marginTop: 15
 			},
 			trophyIcon: {
 				height: 40,
 				width: 40,
 				marginRight: 12
 			},
 			leaderboard: {
 				fontSize: 37,
 				color: "#ecf0f1",
 				fontFamily: "dogbyte",
 				marginTop: 15
 			}
 			,
 			leaderboardIcon: {
 				height: 45,
 				width: 45,
 				marginRight: 14,
 				marginTop:9
 			},
 			bottomContainer: {
 				position: "absolute",
 				bottom: 12,
 				left: 12
 			},
 			bottomRightContainer: {
       			position: "absolute",
 				bottom: 12,
 				right: 12
 			},
 			copyrightText: {
 				fontSize: 16,
 				fontFamily: "dogbyte"
 			},
 			soundIcon: {
 				width: 45,
 				height: 45
 			}
})