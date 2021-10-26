import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";

export default function LoginLogin({
  setPage,
  setUser,
  setClothes,
  setOutfits,
}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let postLogIn = async () => {
    if (password === "" || name === "") {
      return;
    }
    if (password !== password) {
      return;
    }
    let response = await fetch("http://192.168.2.33:4000/logIn/", {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, password: password }),
    });

    let body = await response.text();
    body = JSON.parse(body);

    if (body.success) {
      setPage("dailyInspiration");
      setUser(body.user);
      setClothes(body.clothes);
      setOutfits(body.outfits);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/LOGOGV.png")}
        />

        <View style={styles.inputcontainer}>
          <Text style={styles.signup}>Name</Text>
          <TextInput
            style={styles.nameinput}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.signup}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.passwordinput}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.inputcontainer2}>
          <TouchableOpacity
            onPress={() => {
              postLogIn();
            }}
            style={styles.TouchableOpacity}
          >
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setPage("signUp");
            }}
            style={styles.TouchableOpacity2}
          >
            <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  tinyLogo: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  slogan: {
    alignItems: "center",
    justifyContent: "center",
  },

  TouchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    width: 200,
    color: "white",
    borderRadius: 15,
  },

  login: {
    color: "white",
  },

  TouchableOpacity2: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 200,
    color: "white",
    borderRadius: 15,
  },
  signup: {
    color: "black",
    textDecorationLine: "underline",
  },

  signup: {
    color: "black",
    textDecorationLine: "underline",
  },

  inputcontainer: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  nameinput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    borderRadius: 5,
    margin: 10,
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: "center",
  },

  passwordinput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    borderRadius: 5,
    margin: 10,
    paddingRight: 10,
    paddingLeft: 10,
    textAlign: "center",
  },

  inputcontainer2: {},
});
