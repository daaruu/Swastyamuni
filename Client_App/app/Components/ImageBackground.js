import React from "react";

function ImageBackground({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/projectImages/logo.png")}
      resizeMode="center"
      style={styles.backgroundImage}
    >
      {" "}
      {children}{" "}
    </ImageBackground>
  );
}

export default ImageBackground;
