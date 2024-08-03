import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { handleForgotPassword } from "../../Components/HandleFunctions";
import { styles } from "./Styles";
import { MainLogo } from "../../Components/MainLogo";
import ParentView from "../../Components/ParentViews";
import { GoogleButton } from "../../Components/GoogleButton";
import Or from "../../Components/Or";
import GreenButton from "../../Components/GreenButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { storeToken } from "../../config/tokenStorage";
import FooterLogin from "../../Components/Footer/FooterLogin";
import BASE_URL from "../../config/urlIpaddress";

function Login() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <ParentView>
      <MainLogo
        alt="App Logo"
        resizeMode="contain"
        source={require("../../assets/projectImages/logo.png")}
        style={{ alignSelf: "center" }}
      />

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email address</Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            keyboardType="email-address"
            onChangeText={(email) => setForm({ ...form, email })}
            placeholder="john@example.com"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.email}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Password</Text>

          <TextInput
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={(password) => setForm({ ...form, password })}
            placeholder="********"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            secureTextEntry={true}
            value={form.password}
          />
        </View>

        <GreenButton
          title={"Login"}
          handle={async () => {
            try {
              const response = await axios.post(`${BASE_URL}/auth/login`, {
                email: form.email,
                password: form.password,
              });

              if (response.data.valid) {
                const tk = response.data.token;
                await storeToken(tk);
                console.log(tk);
                navigation.navigate("ChatScreen");
              } else {
                console.log("Invalid");
              }
              setForm({
                email: "",
                password: "",
              });
            } catch (err) {
              console.log("here : ", err);
            }
          }}
        />
        <Or />
        <GoogleButton navigation={navigation} />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.formLink}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <FooterLogin navigation={navigation} />
    </ParentView>
  );
}

export default Login;
