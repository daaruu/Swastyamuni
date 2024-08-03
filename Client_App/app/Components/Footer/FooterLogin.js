import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function FooterLogin({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
      <Text style={styles.formFooter}>
        Don't have an account ?<Text> </Text>
        <Text style={{ color: "#508D4E" }}>Register</Text>
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
    marginBottom: 20,
  },
});
export default FooterLogin;
