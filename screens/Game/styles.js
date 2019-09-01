import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#0a0a0a",
   justifyContent: "center",
   alignItems: "center",
 },
  bottomContainer: {
  	flex: 1,
  	width: Dimensions.get("window").width * 0.875,
  	flexDirection: "row",
  	marginTop: 15 ,
  	justifyContent: "space-between"
  },
  bottomContainerTitle: {
   	fontFamily: "dogbyte",
   	fontSize: 42,
   	color: "white"
  },
   bottomContainerSubTitle: {
   	fontFamily: "dogbyte",
   	fontSize: 15,
   	color: "white"
  },
  bottomContainerIcon: {
  	width: 30,
  	height: 30,
  	marginTop: 15
  },
  pauseIcon: {
  	marginTop: 15,
  	marginLeft: 15,
  	width: 50,
  	height: 50
  },
  pausedContainer: {
  	flex: 1,
  	alignItems: "center",
  	justifyContent: "center"
  },
  pausedIcon: {
  	 width: 80,
  	 height: 80
  },
  pausedText: {
  	fontFamily: "dogbyte",
  	fontSize: 60,
  	color: "white",
  	marginTop: 15,
  	textAlign: "center"
  }
});