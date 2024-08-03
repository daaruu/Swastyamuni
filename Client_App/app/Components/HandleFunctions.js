// Login Screen Functions

export const handleLoginPress = () => {
  console.log("Logged in ");
};

export const handleRegisterPress = () => {
  console.log("Registered");
};

export const handleGoogleLogin = () => {

};

export const handleForgotPassword = () => {
  console.log("User forgot the password");
};

export const handleRegister = (setFlag) => {
  setFlag(false);
};

export const handleLogin = (setFlag) => {
  setFlag(true);
};

export const handleInputChange = (setForm, name, value) => {
  setForm((prevForm) => ({ ...prevForm, [name]: value }));
};
