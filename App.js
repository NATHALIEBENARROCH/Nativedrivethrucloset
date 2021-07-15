import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './pages/LogIn';
import Camera from './pages/Camera';
import DailyInspiration from './pages/DailyInspiration';
import SaveAndShare from './pages/SaveAndShare';


export default function App() {
  let [page, setPage] = useState("logIn")

  return (
    <>
{page==="logIn" && <LogIn nextpage={()=>{setPage("dailyInspiration")}}/>
}
{page==="camera" && <Camera setPage={setPage}/>
}
{page==="dailyInspiration" && <DailyInspiration setPage={setPage}/>

// ABOVE IS PROP OR EXPORT THAT IS INITIATED HERE AND PASSED TO DAILY INSPIRATION CHILD COMPONENT
}

{page==="saveAndShare" && <SaveAndShare setPage={setPage}/>
}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
