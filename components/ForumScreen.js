import { TextInput, Text, View, Button, Alert, Modal } from "react-native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles";
import { set } from "react-native-reanimated";

export default function ForumScreen() {
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
    let data = { message : comment }
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
    <View>
      {/* CREATION ARTICLE */}
      <View>
        <View>
          <Text> Sujet</Text>
        </View>
        <View style={styles.input}>
          <TextInput onChangeText={setSujet} value={sujet} require />
        </View>
        <View>
          <Text> Message</Text>
        </View>
        <View style={styles.input}>
          <TextInput onChangeText={setMessage} value={message} require />
        </View>
        <View>
          <Button title="Valider" onPress={AddPost} />
        </View>
      </View>
      {/* LISTE ARTICLES */}
      <ScrollView>
        {data.map((item) => (
          <View key={item._id}>
            <View>
              <Text>{item.sujet}</Text>
            </View>
            <View>
              <Text>{item.message}</Text>
            </View>
            <View>
              <Text>{item.date}</Text>
              <Text>{item.pseudo}</Text>
            </View>
            <View style={styles.btnContainer}>
              <Button
                style={styles.btnForum}
                title="addLike"
                onPress={() => testAddLike(item._id)}
              />
              {/* <Like onClick={() => item.Like(item).then(testAddLike(item._id))}></Like> */}
              <Button
                style={styles.btnForum}
                title="X"
                onPress={() => toDelete(item._id)}
              ></Button>
              <Button
                style={styles.btnForum}
                title="Répondre"
                onPress={() => handleModal(item._id)}
              ></Button>
            </View>
            {/* MODAL REPONSE */}
            <View style={styles.container}>
              <View style={{ flex: 1 }}></View>
              <Modal style={styles.modal} visible={isModalVisible}>
                <TextInput
                  style={styles.input}
                  onChangeText={setComment}
                  value={comment}
                  require
                />
                <Button title="Envoyer" onPress={() => toComment(item._id)} />
              </Modal>
              <View style={{ flex: 1 }}></View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
