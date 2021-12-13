import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Menu from "./Menu";
import Logoutbutton from "./Logoutbutton";

export default function CameraPage({ setPage }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      // Don't request camera permission natively if not available, fixes web
      if (Camera.requestCameraPermissionsAsync) {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === "granted");
      }
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      setImage(data.uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No Camera Access</Text>;
  }

  return (
    <>
      <View style={styles.container}>
        <Logoutbutton setPage={setPage} />
        <View style={styles.header}>
          <View style={styles.intro}>
            <Text style={styles.title}>Camera</Text>
          </View>
        </View>
        <View style={styles.bordercards}>
          <View style={styles.cameraContainer}>
            <Camera
              ref={(ref) => setCamera(ref)}
              style={styles.fixedRatio}
              type={type}
            />

            <View style={styles.direction}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.saveButtonTitle}>Flip Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => takePicture()}
              >
                <Text style={styles.saveButtonTitle}>Take Picture</Text>
              </TouchableOpacity>
            </View>

            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>
        </View>
        ~
        <Menu setPage={setPage} />
        {/* // ABOVE IS PROP OR EXPORT THAT IS PASSED TO MENU COMPONENT */}
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

  cameraContainer: {
    flex: 0.8,
    flexDirection: "column",
    borderRadius: 15,
    marginTop: -20,
  },

  fixedRatio: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
    aspectRatio: 1,
  },

  image: {
    flex: 1,
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
    width: "100%",
  },

  btn: {
    marginTop: 2,
    marginBottom: 2,
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
  direction: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  saveButtonTitle: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
  },
});
