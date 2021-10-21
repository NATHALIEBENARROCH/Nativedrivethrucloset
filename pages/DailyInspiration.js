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
  Alert,
} from "react-native";
import Menu from "./Menu";
import SaveModal from "./SaveModal";
import Logoutbutton from "./Logoutbutton";
import MenuClothes from "./MenuClothes";
import App from "../App";
import { Linking } from "react-native";

export default function DailyInspiration({ setPage, clothes, userId }) {
  // ABOVE WE ARE IMPORTING PROP SETPAGE FROM App.JS PARENT
  const [category1, setCategory1] = useState("blouses");
  const [category2, setCategory2] = useState("pants");
  const [category3, setCategory3] = useState("shoes");
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);

  const [renderClothesTop, setRenderClothesTop] = useState([]);
  const [renderClothesMiddle, setRenderClothesMiddle] = useState([]);
  const [renderClothesBottom, setRenderClothesBottom] = useState([]);

  const [indexClothesTop, setIndexClothesTop] = useState(0);
  const [indexClothesMiddle, setIndexClothesMiddle] = useState(0);
  const [indexClothesBottom, setIndexClothesBottom] = useState(0);

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
    let valueTop = [];
    let valueMiddle = [];
    let valueBottom = [];
    // alert(clothes.length);
    clothes.forEach((clothing, index) => {
      if (clothing.category === category1) {
        valueTop.push(
          <Image
            style={styles.picture}
            source={{ uri: clothing.url }}
            key={index}
          />
        );
      } else if (clothing.category === category2) {
        valueMiddle.push(
          <Image
            style={styles.picture}
            source={{ uri: clothing.url }}
            key={index}
          />
        );
      }
      if (clothing.category === category3) {
        valueBottom.push(
          <Image
            style={styles.picture}
            source={{ uri: clothing.url }}
            key={index}
          />
        );
      }
      // alert(clothing.url);
    });
    if (valueTop.length === 0) {
      valueTop.push(
        <Image
          style={styles.picture}
          source={require("../assets/NothingYet.jpg")}
        />
      );
    }

    if (valueMiddle.length === 0) {
      valueMiddle.push(
        <Image
          style={styles.picture}
          source={require("../assets/NothingYet.jpg")}
        />
      );
    }

    if (valueBottom.length === 0) {
      valueBottom.push(
        <Image
          style={styles.picture}
          source={require("../assets/NothingYet.jpg")}
        />
      );
    }
    setRenderClothesTop(valueTop);
    setRenderClothesMiddle(valueMiddle);
    setRenderClothesBottom(valueBottom);
  }, [clothes, category1, category2, category3]);

  const saveOutfit = (title) => {
    let outfit = { title: "", userId: "", totalPrice: null, clothes: [] };
    outfit.title = title;
    outfit.userId = userId;
    const topClothesCategoryActive = clothes.filter((clothing) => {
      return clothing.category === category1;
    });
    const middleClothesCategoryActive = clothes.filter((clothing) => {
      return clothing.category === category2;
    });
    const bottomClothesCategoryActive = clothes.filter((clothing) => {
      return clothing.category === category3;
    });

    if (
      topClothesCategoryActive.length === 0 ||
      middleClothesCategoryActive.length === 0 ||
      bottomClothesCategoryActive.length === 0
    ) {
      setIsSaveModalOpen(false);
      Alert.alert("Oops!", "Please pick 3 items");
      return;
    }

    outfit.clothes.push({
      price: topClothesCategoryActive[indexClothesTop]["price"],
      url: topClothesCategoryActive[indexClothesTop]["url"],
      id: topClothesCategoryActive[indexClothesTop]["_id"],
      brand: topClothesCategoryActive[indexClothesTop]["brand"],
      category: topClothesCategoryActive[indexClothesTop]["category"],
    });
    outfit.clothes.push({
      price: middleClothesCategoryActive[indexClothesMiddle]["price"],
      url: middleClothesCategoryActive[indexClothesMiddle]["url"],
      id: middleClothesCategoryActive[indexClothesMiddle]["_id"],
      brand: middleClothesCategoryActive[indexClothesMiddle]["brand"],
      category: middleClothesCategoryActive[indexClothesMiddle]["category"],
    });
    outfit.clothes.push({
      price: bottomClothesCategoryActive[indexClothesBottom]["price"],
      url: bottomClothesCategoryActive[indexClothesBottom]["url"],
      id: bottomClothesCategoryActive[indexClothesBottom]["_id"],
      brand: bottomClothesCategoryActive[indexClothesBottom]["brand"],
      category: bottomClothesCategoryActive[indexClothesBottom]["category"],
    });
    outfit.totalPrice =
      outfit.clothes[0]["price"] +
      outfit.clothes[1]["price"] +
      outfit.clothes[2]["price"];
    postOutfit(outfit);
  };

  // THIS WILL SEND OUTFITS TO BACK END
  let postOutfit = async (outfit) => {
    let response = await fetch("http://192.168.2.33:4000/saveOutfit/", {
      method: "post",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ outfit: outfit }),
    });
    let body = await response.text();
    body = JSON.parse(body);
    if (body.success) {
      Alert.alert("Congratulations!", body.message);
      setIsSaveModalOpen(false);
    }
  };

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
            <ScrollView
              snapToInterval={400}
              decelerationRate={0.85}
              horizontal={true}
              onScroll={(event) => {
                setIndexClothesTop(event.nativeEvent.contentOffset.x / 400);
              }}
            >
              {renderClothesTop}
            </ScrollView>

            <MenuClothes setCategory={setCategory1} section={"top"} />
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{category1}</Text>
            </View>
          </View>

          <View style={styles.bordercards}>
            <ScrollView
              snapToInterval={400}
              decelerationRate={0.85}
              horizontal={true}
              onScroll={(event) => {
                setIndexClothesMiddle(event.nativeEvent.contentOffset.x / 400);
              }}
            >
              {renderClothesMiddle}
            </ScrollView>

            <MenuClothes setCategory={setCategory2} section={"middle"} />
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{category2}</Text>
            </View>
          </View>

          <View style={styles.bordercards}>
            <ScrollView
              snapToInterval={400}
              decelerationRate={0.85}
              horizontal={true}
              onScroll={(event) => {
                setIndexClothesBottom(event.nativeEvent.contentOffset.x / 400);
              }}
            >
              {renderClothesBottom}
            </ScrollView>
            <MenuClothes setCategory={setCategory3} section={"bottom"} />
            <View style={styles.cardTitle}>
              <Text style={styles.cardTitleText}>{category3}</Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            setIsSaveModalOpen(true);
          }}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonTitle}>Align & Save</Text>
        </TouchableOpacity>

        <Menu setPage={setPage} />
        {/* // ABOVE IS PROP OR EXPORT THAT IS PASSED TO MENU COMPONENT */}

        {
          isSaveModalOpen === true && (
            <SaveModal
              saveOutfit={saveOutfit}
              setIsSaveModalOpen={setIsSaveModalOpen}
            />
          )

          // ABOVE IS PROP OR EXPORT THAT IS INITIATED HERE AND PASSED TO DAILY INSPIRATION CHILD COMPONENT
        }
      </View>

      {/* quand on appuie sur fonction setIsSaveModalOpen on change l'etat de la variable */}
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
    paddingTop: 10,
    paddingBottom: 10,
  },

  cardTitleText: {
    fontSize: 15,
    fontWeight: "300",
    color: "white",
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 400,
    resizeMode: "contain",
    borderWidth: 4,
    borderColor: "black",
    borderStyle: "solid",
    padding: 20,
  },

  saveButton: {
    position: "absolute",
    right: 0,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "white",
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 4,
    borderColor: "black",
    borderStyle: "solid",
    paddingTop: 10,
    paddingBottom: 10,
  },

  saveButtonTitle: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
  },
});
