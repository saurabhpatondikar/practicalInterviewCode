import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from 'jwt-decode';

export const saveToStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    return false;
  }
}

export const removeFromStorage = async (key) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    return new Error(error);
  }
}

export const accessStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    return new Error(error);
  }
}

export const isJwtExpired = (token) => {
  let decoded = jwtDecode(token);
  if (decoded.exp < new Date().getTime() / 1000) {
    return true;
  } else {
    return false;
  }
};