import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Menu from "./Menu";
import Logoutbutton from "./Logoutbutton";
import SaveModal from "./SaveModal";

const width = Dimensions.get('window').width;
export default function SaveAndShare({ setPage, outfits, setOutfits }) {
  const [renderOutfits, setRenderOutfits] = useState([]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [indexOutfit, setIndexOutfit] = useState(0);
  const [title, setTitle] = useState("");
  useEffect(() => {
    let val = indexOutfit;
    if (!Number.isInteger(val)) {
      return;
    }

    setTitle(outfits[indexOutfit]["title"]);
  }, [indexOutfit]);
  useEffect(() => {
    let value = [];
    if (outfits.length === 0) {
      setTitle("no oufit created yet");
    } else {
      setTitle(outfits[0]["title"]);
    }
    outfits.forEach((outfit, index) => {
      let tempValue = [
        <View style={styles.pictureContainer} key={index}>
          <Image
            style={styles.picture}
            source={{ uri: outfit["clothes"][0]["url"] }}
          />
          <Image
            style={styles.picture}
            source={{ uri: outfit["clothes"][1]["url"] }}
          />
          <Image
            style={styles.picture}
            source={{ uri: outfit["clothes"][2]["url"] }}
          />
        </View>,
      ];
      value.push(tempValue);
    });
    setRenderOutfits(value);
  }, [outfits]);

  const saveOutfit = () => {
    setIsShareModalOpen(false);
  }
  const setIsSaveModalOpen = () => {
    setIsShareModalOpen(false);
  }
  const Item = ({item}) => {
    return (
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        width,
      }}>
        <View style={{
          borderRadius: 15,
          marginTop: 25,
          borderWidth: 4,
          borderColor: "black",
          borderStyle: "solid",
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
          minHeight: 500,
        }}>
          <View style={{
            paddingTop: 50,
            width: 400,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Image
              style={styles.picture}
              source={{ uri: item.clothes[0]["url"] }}
            />
            <Image
              style={styles.picture}
              source={{ uri: item.clothes[1]["url"] }}
            />
            <Image
              style={styles.picture}
              source={{ uri: item.clothes[2]["url"] }}
            />
          </View>
          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>{item.title}</Text>
          </View>
        </View>
      </View>
    )
  };

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

        <FlatList
          data={outfits}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item._id}
          horizontal
          snapToInterval={width}
          decelerationRate={0.95}
          onScroll={(event) => {
            let val = event.nativeEvent.contentOffset.x / width;
            if (!Number.isInteger(val)) {
              return;
            }
            setIndexOutfit(event.nativeEvent.contentOffset.x / width);
          }}
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        {/* <View style={styles.bordercards}>
          <ScrollView
            snapToInterval={400}
            decelerationRate={0.95}
            horizontal={true}
            onScroll={(event) => {
              let val = event.nativeEvent.contentOffset.x / 400;
              if (!Number.isInteger(val)) {
                return;
              }
              setIndexOutfit(event.nativeEvent.contentOffset.x / 400);
            }}
          >
            {renderOutfits}
          </ScrollView>

          <View style={styles.cardTitle}>
            <Text style={styles.cardTitleText}>{title}</Text>
          </View>
        </View> */}

        <TouchableOpacity
          onPress={() => {
            setIsShareModalOpen(true);
          }}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonTitle}>Share</Text>
        </TouchableOpacity>

        <Menu setPage={setPage} />

        {
          isShareModalOpen === true && (
            // <Text>LOL</Text>
            <SaveModal
              saveOutfit={saveOutfit}
              setIsSaveModalOpen={setIsSaveModalOpen}
            />
          )

          // ABOVE IS PROP OR EXPORT THAT IS INITIATED HERE AND PASSED TO DAILY INSPIRATION CHILD COMPONENT
        }
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

  pictureContainer: {
    paddingTop: 120,
    width: 400,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    resizeMode: "contain",
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
