import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet, View, Text, Bouton, Image, Button } from "react-native";
import Menu from "./Menu";
import Logoutbutton from "./Logoutbutton";

export default function CameraPage({ setPage }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
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
            <Button
              title="Flip Camera"
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
            <Button
              title="Take Picture"
              onPress={() => takePicture()}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />

            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>
        </View>

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
    borderWidth: 4,
    borderColor: "green",
    borderStyle: "solid",
    borderRadius: 15,
  },

  fixedRatio: {
    height: "100%",
    width: "100%",
    borderRadius: 15,

    aspectRatio: 1,
  },

  image: {
    flex: 1,
    borderWidth: 4,
    borderColor: "green",
    borderStyle: "solid",
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
});
