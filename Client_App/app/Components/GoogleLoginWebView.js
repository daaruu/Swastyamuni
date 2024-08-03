import React from "react";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../config/urlIpaddress";

const GoogleLoginWebView = () => {
  const navigation = useNavigation();

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;

    if (url.includes("http://localhost:5173/login?token=")) {
      const token = url.split("token=")[1];
      AsyncStorage.setItem("authToken", token);
      navigation.navigate("ChatScreen");
    }
  };

  return (
    <WebView
      source={{ uri: `${BASE_URL}/auth/google` }}
      onNavigationStateChange={handleWebViewNavigationStateChange}
    />
  );
};

export default GoogleLoginWebView;
