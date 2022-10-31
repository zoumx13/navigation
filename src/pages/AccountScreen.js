import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, ScrollView, Text, View } from "react-native";
import styles from "../../styles";
import { useEffect, useState, useContext } from "react";
import AnimatedAccount from "../components/animated/AnimatedAccount";
import { AuthContext } from "../contexts/Auth";

export default function AccountScreen({ navigation }) {
  const [show, setShow] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cp, setCp] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [inscription, setInscription] = useState("");
  const [participation, setParticipation] = useState("");
  const [organise, setOrganise] = useState("");
  const [trophes, setTrophes] = useState("");
  const [posts, setPost] = useState("");
  const [responses, setResponses] = useState("");
  const [loadAnimated, setLoadAnimated] = useState(false);
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  const {signOut} = useContext(AuthContext)
  async function Load() {
    const token = await AsyncStorage.getItem("token");
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    };
    let response = await fetch("http://192.168.0.44:8080/account", options);
    let donnes = await response.json();
    if (!donnes || donnes == undefined) {
      console.log("erreur");
    } else {
      setUser(donnes);
      console.log(donnes);
      setNom(donnes.nom);
      setPrenom(donnes.prenom);
      setEmail(donnes.email);
      setTelephone(donnes.telephone);
      setCp(donnes.cp);
      setPseudo(donnes.pseudo);
      setInscription(donnes.inscriptionDate);
      setParticipation(donnes.participation);
      setOrganise(donnes.organise);
      setTrophes(donnes.trophes);
      setPost(donnes.posts);
      setResponses(donnes.responses);
    }
  }
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
  useEffect(() => {
    Load();
  }, []);
  return (
    <View style={styles.mainview}>
      {show ? (
        <ScrollView>
          <View style={{flex:1}}></View>
          <View style={styles.mainAccount}>
            <View style={styles.infoAccount}>
              <Text style={styles.userInfo}>Pseudo : {pseudo}</Text>
              <Text style={styles.userInfo2}>Nom : {nom}</Text>
              <Text style={styles.userInfo}>Prénom : {prenom}</Text>
              <Text style={styles.userInfo2}>Email : {email}</Text>
              <Text style={styles.userInfo}>Téléphone : {telephone}</Text>
              <Text style={styles.userInfo2}>CP : {cp}</Text>
              <Text style={styles.userInfo}>Date d'inscription : {inscription}</Text>
              <Text style={styles.userInfo2}>Tournois organisés : {organise}</Text>
              <Text style={styles.userInfo}>Participation : {participation}</Text>
              <Text style={styles.userInfo2}>Victoires en tournois : {trophes}</Text>
              <Text style={styles.userInfo}>Articles publiés : {posts}</Text>
              <Text style={styles.userInfo2}>Commentaires : {responses}</Text>
            </View>
          </View>
          <View style={{flex:1}}></View>
          <Button title="Déconnexion" onPress={signOut} />
        </ScrollView>
      ) : (
        <AnimatedAccount />
      )}
    </View>
  );
}
