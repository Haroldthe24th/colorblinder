import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
const Header = ({fontSize}) => (
 <View style={{ flexDirection: "row",marginBottom: 70, marginTop: 50 }}>
   <Text style={[styles.header, {  color: "#E64C3C",fontSize }]}>c</Text>
   <Text style={[styles.header, { color: "#E57E31", fontSize }]}>o</Text>
   <Text style={[styles.header, { color: "#F1C431", fontSize }]}>l</Text>
   <Text style={[styles.header, { color: "#68CC73", fontSize  }]}>o</Text>
   <Text style={[styles.header, { color: "#3998DB", fontSize }]}>r</Text>
   <Text style={[styles.header, {fontSize}]}>blinder</Text>
 </View>
);

Header.propTypes = {
 fontSize: PropTypes.number
}

Header.defaultProps = {
 fontSize: 55
}
const styles = StyleSheet.create({
 header: {
   color: "#ecf0f1",
   fontFamily: "dogbyte"
 }
});

export { Header };