import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./app/Screens/Login/Login.js";
import Register from "./app/Screens/Register/Register.js";
import { ChatScreen } from "./app/Screens/ChatScreen/ChatScreen.js";
import GoogleLoginWebView from "./app/Components/GoogleLoginWebView.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="GoogleLogin" component={GoogleLoginWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
