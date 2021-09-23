import { StatusBar } from "expo-status-bar";
import moment from "moment";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Menu from "./Menu";
import Logoutbutton from "./Logoutbutton";
import MenuClothes from "./MenuClothes";
import App from "../App";
import { Linking } from "react-native";

export default function DailyInspiration({ setPage, clothes }) {
  // ABOVE WE ARE IMPORTING PROP SETPAGE FROM App.JS PARENT
  const [category1, setCategory1] = useState("blouses");
  const [category2, setCategory2] = useState("pants");
  const [category3, setCategory3] = useState("shoes");
  const [categoryPages, setCategoryPages] = useState({
    coats: 0,
    jackets: 0,
    cardigans: 0,
    sweaters: 0,
    blouses: 0,
    tshirts: 0,
    dresses: 0,
    jumpsuits: 0,
    pants: 0,
    skirts: 0,
    shorts: 0,
    bags: 0,
    shoes: 0,
    accessories: 0,
  });
  const [renderClothesTop, setRenderClothesTop] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  }, []);

  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  var sec = new Date().getSeconds(); //To get the Current Seconds

  var date = moment().utcOffset("+05:30").format("YYYY-MM-DD hh:mm:ss a");

  useEffect(() => {
    let value = [];
    // alert(clothes.length);
    clothes.forEach((clothing) => {
      // alert(clothing.url);
      value.push(
        <Image style={styles.picture} source={{ uri: clothing.url }} />
      );
    });
    setRenderClothesTop(value);
  }, [clothes]);

  return (
    <>
      <View style={styles.container}>
        <Logoutbutton setPage={setPage} />

        <View style={styles.header}>
          <View style={styles.intro}>
            <Text style={styles.title}>Daily Inspiration</Text>
            <Text style={styles.textStyle}>{currentDate}</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollsection}>
          <View style={styles.bordercards}>
            {renderClothesTop}
            <MenuClothes setCategory={setCategory1} section={"top"} />
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{category1}</Text>
            </View>
          </View>

          <View style={styles.bordercards}>
            <MenuClothes setCategory={setCategory2} section={"middle"} />
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{category2}</Text>
            </View>
          </View>

          <View style={styles.bordercards}>
            <MenuClothes setCategory={setCategory3} section={"bottom"} />
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{category3}</Text>
            </View>
          </View>
        </ScrollView>

        <Menu setPage={setPage} />
        {/* // ABOVE IS PROP OR EXPORT THAT IS PASSED TO MENU COMPONENT */}
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
  },

  header: {
    flex: 0.15,
    marginBottom: 10,
    width: 350,
  },

  intro: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "300",
  },

  scrollsection: {
    flex: 0.15,
  },

  bordercards: {
    borderRadius: 15,
    margin: 15,
    borderWidth: 4,
    borderColor: "black",
    borderStyle: "solid",
    minHeight: 300,
    minWidth: 350,
    alignItems: "center",
    justifyContent: "center",
  },

  clothingcat: {
    fontSize: 30,
    fontWeight: "300",
  },

  link: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
    textDecorationLine: "underline",
  },

  cardTitle: {
    position: "absolute",
    top: -13,
    backgroundColor: "black",
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },

  cardTitleText: {
    fontSize: 15,
    fontWeight: "300",
    color: "white",
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
