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
import Menu from "./Menu";
import Logoutbutton from "./Logoutbutton";

export default function SaveAndShare({ setPage }) {
  return (
    <>
      <View style={styles.container}>
        <Logoutbutton setPage={setPage} />
        {/* HERE WE ARE EXPORTING PROP TO THE CHILD COMPONENT  */}
        <View style={styles.header}>
          <View style={styles.intro}>
            <Text style={styles.title}>Save and Share</Text>
          </View>
        </View>

        <View style={styles.bordercards}>
          <ScrollView
            snapToInterval={400}
            decelerationRate={0.85}
            horizontal={true}
            onScroll={(event) => {
              setIndexClothesTop(event.nativeEvent.contentOffset.x / 400);
            }}
          >
            {/* {renderClothesTop} */}
          </ScrollView>

          <View style={styles.cardTitle}>
            {/* <Text style={styles.cardTitleText}>{category1}</Text> */}
            <Text style={styles.cardTitleText}>HELLO</Text>
          </View>
        </View>

        <Menu setPage={setPage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  header: {
    flex: 0.15,
    marginBottom: 55,
    top: 25,
    width: 350,
    position: "absolute",
  },

  intro: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "300",
  },

  bordercards: {
    borderRadius: 15,
    marginTop: 25,
    borderWidth: 4,
    borderColor: "black",
    borderStyle: "solid",
    minHeight: 500,
    minWidth: 350,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    position: "absolute",
    top: -13,
    backgroundColor: "black",
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },

  cardTitleText: {
    fontSize: 15,
    fontWeight: "300",
    color: "white",
  },
});
