import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { StyleSheet, View, Text, Bouton, Image, Button } from "react-native";
import Menu from "./Menu";
import Logoutbutton from "./Logoutbutton";

export default function Camera({ setPage }) {
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

        <View style={{ flex: 1 }}>
          <View style={styles.cameraContainer}>
            <Camera
              ref={(ref) => setCamera(ref)}
              style={styles.fixedRatio}
              type={type}
              ratio={"1:1"}
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
              title="Flip Camera"
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
    flex: 1,
    flexDirection: "row",
  },

  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },

  image: {
    flex: 1,
  },
});
