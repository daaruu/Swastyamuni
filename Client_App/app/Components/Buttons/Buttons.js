import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Style";

function Buttons(props) {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="book-open-page-variant-outline"
          size={30}
          color="black"
        />
        <Text style={styles.buttonText}>Help you broaden your knowledge</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="health-and-safety" size={30} color="black" />
        <Text style={styles.buttonText}>
          Give me remedies for better health
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Buttons;
