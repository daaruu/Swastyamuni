import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 8,
    paddingTop: 16,
    marginBottom: 16,
    width: "100%",
    rowGap: 4,
  },
  buttonsContainer: {
    width: "90%",
    height: "auto",
    flexDirection: "row",
    columnGap: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
    padding: 10,
    fontWeight: "450",
    textAlign: "center",
  },
});
