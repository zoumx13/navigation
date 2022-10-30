import Opening from "./src/pages/Opening"
import Animated from "./src/components/animated/Animated";
import LogScreen from "./src/pages/LogScreen";
import { Text, View, StatusBar, ActivityIndicator } from "react-native";
import { useState, useEffect, useMemo } from "react";
import styles from "./styles";
import { AuthContext } from "./src/contexts/Auth";
import MyTabs from "./src/pages/MyTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

// export default function App() {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     setTimeout(() => setShow(true), 3500);
//   }, []);
//   return (
//       <View name="Opening" style={{ flex: 1 }}>
//         {show ? <Opening /> : <Animated />}
//         <StatusBar style="auto" />
//       </View>
//   );
// }

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      async function Logged() {
        const newUserData = JSON.stringify({ email, password });
        setUserData(newUserData);
        await AsyncStorage.setItem("userData", newUserData);
        const jsonValue = await AsyncStorage.getItem("userData");
        console.log(JSON.parse(jsonValue));
        console.log("Bonjour !");
      }
      // setUserData("jjj");
      setIsLoading(false);
    },
    signOut: () => {
      setUserData(null);
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    false;
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  console.log(userData);
  return (
    <AuthContext.Provider value={authContext}>
          <NavigationContainer>
      {userData != null ? (
      <MyTabs />
      ) : (<LogScreen/> )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App