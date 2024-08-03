import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { styles } from "./Style";
import axios from "axios";
import { SendHorizonal } from "lucide-react-native";
import BASE_URL from "../../config/urlIpaddress";

function Footer({ setMessageList }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const input = text;
    setText("");
    setMessageList((prevData) => [...prevData, input]);
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/generate`, {
        prompt: input,
      });
      setMessageList((prevData) => [...prevData, response.data.text]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      Keyboard.dismiss();
    }
  };
  return (
    <View style={styles.footer}>
      <View style={styles.queryBox}>
        <TextInput
          style={styles.queryInput}
          placeholder="Ask Swastyamuni"
          onChangeText={(newText) => setText(newText)}
          value={text}
        />

        <TouchableOpacity onPress={handleClick} disabled={loading}>
          {loading ? (
            <ActivityIndicator
              size="large"
              color="black"
              style={{ marginRight: 10 }}
            />
          ) : (
            <SendHorizonal
              size={30}
              strokeWidth={1}
              style={{ marginRight: 10 }}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Footer;
