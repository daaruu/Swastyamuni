import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import color from "../config/color";
import { useNavigation } from "@react-navigation/native";
import react from "react";

export const GoogleButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("GoogleLogin")}>
      <View style={styles.btn}>
        <Image
          alt="Google Logo"
          resizeMode="contain"
          style={styles.image}
          source={require("../assets/projectImages/GoogleLogo.png")}
        />
        <Text style={[styles.btnText]}>Continue with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#8C8C8C",
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 8,
    borderWidth: 0.5,
    backgroundColor: "#ffffff",
    borderColor: color.boldTextGreen,
    marginVertical: 15,
  },
});

export default GoogleButton;
