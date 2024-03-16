import AsyncStorage from "@react-native-async-storage/async-storage";


export const setAsyncData = async (keyName: string, value: any) => {
  try {
    const jsonValue: any = value ? JSON.stringify(value) : undefined;
    await AsyncStorage.setItem(keyName, jsonValue);
  } catch (error: any) {
    console.log("AsyncStorage Data store error", error);
  }
};

export const getAsyncData = async (keyName: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error: any) {
    console.log("AsyncStorage reading Data store error", error);
  }
};
export const removeAsyncData = async (keyName: string) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (error: any) {
    console.log("AsyncStorage reading Data store error", error);
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage clear succrss");
  } catch (error: any) {
    console.log("AsyncStorage clearAll error", error);
  }

  console.log("Done.");
};
