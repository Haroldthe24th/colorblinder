import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Home/index.js";
import Game from "./Game/index.js";


const StackNavigator = createStackNavigator(
 {
   Home: {
     screen: Home
   },
   Game: {
   	screen: Game
   }
 },
 {
   initialRouteName: "Home",
   headerMode: "none"
 }
);

export default createAppContainer(StackNavigator);