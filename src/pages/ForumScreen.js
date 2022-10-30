import {
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Button,
  Alert,
  Modal,
} from "react-native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../styles"
import AnimatedForum from "../components/animated/AnimatedForum";

function Forum() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(!isModalVisible);
  async function LoadPost() {
    const token = await AsyncStorage.getItem("token");
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    let response = await fetch("http://192.168.0.44:8080/forum", options);
    let donnes = await response.json();
    if (!donnes || donnes == undefined) {
      console.log("erreur");
    } else {
      setData(donnes);
    }
  }
  const AddPost = async (event) => {
    event.preventDefault();
    const token = await AsyncStorage.getItem("token");
    console.log("token loadpost :", token);
    let data = { sujet: sujet, message: message };
    let options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    let response = await fetch("http://192.168.0.44:8080/forum", options);
    let donnes = await response.json();
    if (!donnes || donnes == undefined) {
      console.log("erreur");
    } else {
      setPost(donnes);
      setSujet("");
      setMessage("");
    }
  };
  function Like() {
    let [likes, setLikes] = useState(0);
    let [myLike, setMyLike] = useState(false);
    let btn;
    if (myLike == false) {
      btn = "Like";
    } else {
      btn = "Dislike";
    }
    const addLike = (id) => {
      if (myLike == false) {
        setMyLike((myLike) => !myLike);
        setLikes(likes + 1);
        console.log("like");
      } else {
        setMyLike((myLike = !myLike));
        setLikes(likes - 1);
        console.log("dislike");
      }
    };
    return (
      <View>
        <Text>Nombre de like : {likes}</Text>
        <Button title={btn} onPress={addLike} />
      </View>
    );
  }
  const testAddLike = (id) => {
    console.log("retest is :", id);
  };
  const toDelete = async (id) => {
    console.log("testid:", id);
    const token = await AsyncStorage.getItem("token");
    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    let response = await fetch(`http://192.168.0.44:8080/forum/${id}`, options);
    let donnes = await response.json();
    if (donnes) {
      console.log("Article supprimé ", donnes);
      setPost(donnes);
    } else {
      console.log("erreur");
    }
  };
  const toComment = async (id) => {
    const token = await AsyncStorage.getItem("token");
    let data = { message: comment };
    let options = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    let response = await fetch(`http://192.168.0.44:8080/forum/${id}`, options);
    let donnes = await response.json();
    if (donnes) {
      console.log("Commentaire publié ");
      setPost(donnes);
      handleModal();
    } else {
      console.log("erreur");
    }
  };
  useEffect(() => {
    LoadPost();
  }, [post]);
  return (
    <View style={styles.containerForum}>
      <View style={styles.viewPost}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titleInputForum}> Sujet</Text>
        </View>
        <View style={styles.inputViewForum}>
          <TextInput
            style={styles.inputPost}
            onChangeText={setSujet}
            value={sujet}
            require
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.titleInputForum}> Message</Text>
        </View>
        <View style={styles.inputViewForum}>
          <TextInput
            style={styles.inputPost}
            onChangeText={setMessage}
            value={message}
            require
          />
        </View>
        <TouchableOpacity style={styles.btnSubmitPost} onPress={AddPost}>
          <Text style={styles.txtBtnSubmit}>Valider</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewScrollPost}>
        <ScrollView>
          {data.map((item) => (
            <View style={styles.article} key={item._id}>
              <View style={styles.sujetForum}>
                <Text style={styles.titleSujet}>{item.sujet}</Text>
              </View>
              <View style={styles.viewMessage}>
                <Text>{item.message}</Text>
              </View>
              <View style={styles.infoPost}>
                <Text style={styles.txtInfoPost}>{item.date}</Text>
                <Text style={styles.txtInfoPost}>{item.pseudo}</Text>
              </View>
              <View style={styles.btnContainerForum}>
                <TouchableOpacity
                  style={styles.btnForumComment}
                  onPress={() => testAddLike(item._id)}
                >
                  <Text style={styles.txtBtnComment}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnForumDelete}
                  onPress={() => toDelete(item._id)}
                >
                  <Text style={styles.txtBtnComment}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnForumComment}
                  onPress={() => handleModal(item._id)}
                >
                  <Text style={styles.txtBtnComment}>Répondre</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.modalTop}>
                <Modal
                  visible={isModalVisible}
                  transparent={true}
                  animationType="slide"
                >
                  <View style={styles.modal}></View>
                  <View style={styles.modalOn}>
                    <TextInput
                      style={styles.inputModal}
                      onChangeText={setComment}
                      value={comment}
                      multiline={true}
                      numberOfLines={4}
                      require
                    />
                    <Button
                      title="Envoyer"
                      onPress={() => toComment(item._id)}
                    />
                  </View>
                  <View style={styles.modal}></View>
                </Modal>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default function ForumScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [loadAnimated, setLoadAnimated] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      async (e) => {
        setShow(false);
        setLoadAnimated(!loadAnimated);
        return () => unsubscribe();
      },
      [navigation]
    );
  });
  useEffect(() => {
    setTimeout(() => setShow(!show), 1500);
  }, [loadAnimated]);
  return (
    <View style={styles.mainview}>{show ? <Forum /> : <AnimatedForum />}</View>
  );
}
