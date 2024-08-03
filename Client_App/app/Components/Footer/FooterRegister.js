import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function FooterRegister({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text style={[styles.formFooter]}>
        Already have an account ? <Text> </Text>
        <Text style={{ color: "#508D4E" }}>Login</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  formFooter: {
    fontSize: 15,
    fontWeight: "300",
    color: "#80880",
    textAlign: "center",
    letterSpacing: 0.15,
    marginBottom: 25,
  },
});
export default FooterRegister;
