import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function GreenButton({ handle, title }) {
  return (
    <TouchableOpacity onPress={handle}>
      <View style={[styles.btn]}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#508D4E",
    marginBottom: 15,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});

export default GreenButton;
