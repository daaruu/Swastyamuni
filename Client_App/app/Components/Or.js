import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Or(props) {
  return (
    <View style={styles.orContainer}>
      <View style={styles.line} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  text: {
    marginHorizontal: 10,
    color: "gray",
  },
});

export default Or;
