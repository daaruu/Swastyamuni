import React, { useState } from "react";
import { View, Image, Text, TextInput } from "react-native";
import { styles } from "./Styles.js";
import ParentView from "../../Components/ParentViews.js";
import GoogleButton from "../../Components/GoogleButton.js";
import Or from "../../Components/Or.js";
import GreenButton from "../../Components/GreenButton.js";
import axios from "axios";
import { storeToken } from "../../config/tokenStorage.js";
import FooterRegister from "../../Components/Footer/FooterRegister";
import BASE_URL from "../../config/urlIpaddress.js";

export default function Register({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  return (
    <ParentView>
      <Image
        alt="App Logo"
        resizeMode="contain"
        style={styles.headerImg}
        source={require("../../assets/projectImages/logo.png")}
      />

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputLabel}>Full Name</Text>

          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            keyboardType="default"
            onChangeText={(fullName) => setForm({ ...form, fullName })}
            placeholder="Full Name"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.fullName}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputLabel}>Email address</Text>

          <TextInput
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
          title={"Register"}
          handle={async () => {
            try {
              const response = await axios.post(`${BASE_URL}/auth/signup`, {
                email: form.email,
                password: form.password,
                fullName: form.fullName,
              });
              if (response.data.valid) {
                const tk = response.data.token;
                await storeToken(tk);
                console.log(tk);
                navigation.navigate("ChatScreen");
              }
              setForm({
                email: "",
                password: "",
                fullName: "",
              });
            } catch (err) {
              console.log("here " + err);
            }
          }}
        />
        <Or />

        <GoogleButton navigation={navigation} />
      </View>
      <FooterRegister navigation={navigation} />
    </ParentView>
  );
}
