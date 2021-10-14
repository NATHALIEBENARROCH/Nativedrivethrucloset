import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function SaveModal({ setIsSaveModalOpen }) {
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsSaveModalOpen(false);
        }}
        style={styles.background}
      ></TouchableOpacity>
      <View style={styles.modal}>
        {/* to work here */}
        {/* X pour sortir,texte instruction, input dans lequel on met le titre de la tenu, submit */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  modal: {
    flex: 1,
    width: 300,
    height: 300,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },
});
