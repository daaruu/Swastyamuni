import AsyncStorage from "@react-native-async-storage/async-storage";

// Store token
export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("userToken", token);
  } catch (error) {
    // Error saving data
    console.error("Error storing the token", error);
  }
};

// Retrieve token
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    if (token !== null) {
      return token;
    }
  } catch (error) {
    // Error retrieving data
    console.error("Error retrieving the token", error);
  }
};
