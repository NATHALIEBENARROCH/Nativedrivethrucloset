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
} from "react-native";

export default function LogIn({ setPage }) {
  <Image
    style={styles.picture}
    source={{
      uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
    }}
  />;

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/LOGOGV.png")}
        />
        <Text style={styles.slogan}>Let's go for a Fashionable Spin</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              setPage("loginLogin");
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
  picture: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
    resizeMode: "contain",
    borderColor: "black",
  },
  slogan: {
    alignItems: "center",
    justifyContent: "center",
  },
  TouchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
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
});
