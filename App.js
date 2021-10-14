import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LogIn from "./pages/LogIn";
import LoginLogin from "./pages/LoginLogin";
import SignUp from "./pages/SignUp";
import Camera from "./pages/Camera";
import DailyInspiration from "./pages/DailyInspiration";
import SaveAndShare from "./pages/SaveAndShare";

export default function App() {
  let [page, setPage] = useState("logIn");
  let [user, setUser] = useState({ id: "", name: "" });
  let [clothes, setClothes] = useState([]);

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
        />
      )}
      {page === "signUp" && <SignUp setPage={setPage} />}
      {page === "camera" && <Camera setPage={setPage} />}
      {
        page === "dailyInspiration" && (
          <DailyInspiration setPage={setPage} clothes={clothes} />
        )

        // ABOVE IS PROP OR EXPORT THAT IS INITIATED HERE AND PASSED TO DAILY INSPIRATION CHILD COMPONENT
      }

      {page === "saveAndShare" && <SaveAndShare setPage={setPage} />}
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
