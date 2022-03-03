import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogIn from "./pages/LogIn";
import LoginLogin from "./pages/LoginLogin";
import SignUp from "./pages/SignUp";
import CameraPage from "./pages/CameraPage";
import DailyInspiration from "./pages/DailyInspiration";
import SaveAndShare from "./pages/SaveAndShare";

export default function App() {
  let [page, setPage] = useState("logIn");
  let [user, setUser] = useState({ id: "", name: "" });
  let [clothes, setClothes] = useState([]);
  let [outfits, setOutfits] = useState([]);
  // return <CameraPage />;
  return (
    <>
      {page === "logIn" && <LogIn setPage={setPage} />}
      {/* quand le state page est loggin ET le LOGIN PAGE passe le prop setpage qui me change la page */}
      {/* ces pages ont des && pour stipuler la condition sous laquelle ils apparaissent sinon ils apparaissent toujours */}
      {page === "loginLogin" && (
        <LoginLogin
          setPage={setPage}
          setUser={setUser}
          setClothes={setClothes}
          setOutfits={setOutfits}
        />
      )}
      {page === "signUp" && <SignUp setPage={setPage} />}
      {page === "cameraPage" && <CameraPage setPage={setPage} />}
      {
        page === "dailyInspiration" && (
          <DailyInspiration
            setPage={setPage}
            clothes={clothes}
            userId={user.id}
            setOutfits={setOutfits}
          />
        )

        // ABOVE IS PROP OR EXPORT THAT IS INITIATED HERE AND PASSED TO DAILY INSPIRATION CHILD COMPONENT
      }

      {page === "saveAndShare" && (
        <SaveAndShare
          setPage={setPage}
          outfits={outfits}
          setOutfits={setOutfits}
        />
      )}
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
});
