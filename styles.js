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
    fontSize: 60,
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
    borderColor: "#1e90ff",
  },
  // FORUM
  containerForum: {
    flex: 1,
  },
  viewPost: {
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleInputForum: {
    color: "#fff",
  },
  inputViewForum: {
    flex: 1,
    height: 40,
    width: 300,
    borderColor: "#1e90ff",
  },
  inputPost: {
    backgroundColor: "#fff",
  },
  btnSubmitPost: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtnSubmit: {
    color: "#1e90ff",
    fontSize: 20,
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnForumPost: {
    color: "#f194ff",
  },
  btnForum: {
    margin: 5,
  },
  article: {
    flex: 1,
    margin: 3,
    borderColor: "#1e90ff",
    borderWidth: 5,
    borderRadius: 30,
  },
  sujetForum: {
    backgroundColor: "#1e90ff",
    borderRadius: 100,
    flex: 1,
  },
  titleSujet: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  viewMessage: {
    flex: 3,
  },
  infoPost: {
    flex: 1,
    flexDirection: "row",
  },
  txtInfoPost: {
    fontSize: 4,
  },
  btnContainerForum: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderTopColor: "#1e90ff",
    borderTopWidth: 2,
    padding: 2,
  },
  btnForumComment: {
    backgroundColor: "#1e90ff",
    borderRadius: 50,
  },
  btnForumDelete: {
    backgroundColor: "red",
    marginHorizontal: 50,
    padding: 2,
    borderRadius: 50,
  },
  txtBtnComment: {
    color: "#fff",
    fontSize: 10,
  },
  viewScrollPost: {
    flex: 4,
  },
  // ACCOUNT
  mainAccount:{
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    padding : 1
  },
  infoAccount:{
    borderColor : "#1e90ff",
    borderWidth : 5,
    flex:1,
    width: 300,
  },
  userInfo:{
    color : "#1e90ff",
  },
  userInfo2:{
    backgroundColor :"#1e90ff",
    color : '#fff',
  },
  // PAGES
  mainview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // MODAL
  modal: {
    flex: 1,
  },
  modalOn: {
    justifyContent : 'center',
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 20,
    borderColor: "#1e90ff",
    borderWidth: 5,
  },
  modalTop: {
    alignItems: "center",
  },
  inputModal: {
    width : 60,
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: "#1e90ff",
  },
  // ANIMATED
  containerAnimated:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
