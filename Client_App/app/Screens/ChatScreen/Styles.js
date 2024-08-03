import React from "react";
import { StyleSheet } from "react-native";
import color from "../../config/color";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(248, 251, 247, 1",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: color.boldTextGreen,
    marginBottom: 18,
  },
});
