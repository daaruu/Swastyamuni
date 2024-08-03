import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#1D2A32",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  headerImg: {
    width: 300,
    height: 200,
    alignSelf: "center",
  },
  form: {
    marginTop: 32,
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#929292",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#417039",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "200",
    color: "B4B4B4",
    borderWidth: 1,
    borderColor: "#ECF1EB",
    borderStyle: "solid",
  },
});
