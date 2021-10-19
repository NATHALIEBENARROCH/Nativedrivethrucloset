import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function SaveModal({ setIsSaveModalOpen, saveOutfit }) {
  const [title, setTitle] = React.useState("");
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsSaveModalOpen(false);
        }}
        style={styles.background}
      ></TouchableOpacity>

      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.to}
          onPress={() => {
            setIsSaveModalOpen(false);
          }}
        >
          <Text style={styles.x}>X</Text>
        </TouchableOpacity>

        <View style={styles.modalInput}>
          <Text style={styles.text}>Name and Save your outfit</Text>

          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={setTitle}
              value={title}
            />
          </SafeAreaView>

          <View style={styles.inputContainer}>
            <TouchableOpacity
              onPress={() => {
                if (title === "") {
                  return;
                }
                saveOutfit(title);
              }}
              style={styles.saveButton}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    elevation: 5,
    zIndex: 5,
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
    elevation: 5,
    zIndex: 5,
  },
  x: {
    fontSize: 20,
  },
  to: {
    top: -70,
    right: -130,
  },

  modalInput: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    top: -40,
  },
  input: {
    top: -30,
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
  saveButton: {
    backgroundColor: "black",
    borderRadius: 15,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    textAlign: "center",
  },
});
