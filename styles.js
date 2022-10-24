import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // LOGSCREEN
  logscreentop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titlelogscreen: {
    color: "#1e90ff",
    fontSize: 60
  },
  logscreenmiddle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logscreenbottom: {
    flex: 4,
  },
  logscreenimage: {
    flex: 1,
    width: windowWidth,
    margin: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor : '#1e90ff',
  },
});

export default styles;
