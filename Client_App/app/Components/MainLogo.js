import { Image, StyleSheet } from "react-native";

export const MainLogo = ({ altTitle, resizeMode, source, style }) => {
  return (
    <Image
      alt={altTitle}
      resizeMode={resizeMode}
      style={[styles.headerImg, style]}
      source={source}
    />
  );
};

const styles = StyleSheet.create({
  headerImg: {
    width: 300,
    height: 200,
  },
});
