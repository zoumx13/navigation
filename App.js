import Animated from "./src/components/animated/Animated";
import LogScreen from "./src/pages/LogScreen";
import { Text, View, StatusBar, ActivityIndicator } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { AuthContext } from "./src/contexts/Auth";
import MyTabs from "./src/pages/MyTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [show, setShow] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => ({
    signIn: async () => {
      const token = await AsyncStorage.getItem("token");
      setUserToken(token);
    },
    signOut: () => {
      setUserToken(null);
      setShow(false)
    },
  }));
  useEffect(() => {
    setTimeout(() => setShow(true), 3500);
  }, [userToken]);
  return (
    <AuthContext.Provider value={authContext}>
      <View name="Opening" style={{ flex: 1 }}>
        {show ? (
          <NavigationContainer>
            {userToken != null ? <MyTabs/> : <LogScreen />}
          </NavigationContainer>
        ) : (
          <Animated />
        )}
        <StatusBar style="auto" />
      </View>
    </AuthContext.Provider>
  );
}
