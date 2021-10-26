import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Logoutbutton({ setPage }) {
  return (
    <>
      <View style={styles.logoutbuttonsection}>
        <TouchableOpacity
          onPress={() => {
            setPage("logIn");
          }}
          style={styles.Logoutbtn}
        >
          <Text style={styles.login}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logoutbuttonsection: {
    top: 25,
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
  },

  Logoutbtn: {
    backgroundColor: "red",
    // WHERE IS RED
    borderRadius: 50,
    width: 45,
    height: 45,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  login: {
    color: "white",
    textAlign: "center",
  },
});
