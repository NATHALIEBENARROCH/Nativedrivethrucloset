import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './pages/Camera';
import DailyInspiration from './pages/DailyInspiration';
import Explore from './pages/Explore';
import LogIn from './pages/LogIn';
import SaveAndShare from './pages/SaveAndShare';
import Style from './pages/Style';
import StartSelecting from './pages/StartSelecting';

export default function App() {
  let [page, setPage] = useState("logIn")



  return (
    <>
{page==="logIn" && <LogIn nextpage={()=>{setPage("dailyInspiration")}}/>
}
{page==="camera" && <Camera/>
}
{page==="dailyInspiration" && <DailyInspiration setPage={setPage}/>

// ABOVE IS PROP OR EXPORT THAT IS PASSED TO DAILY INSPIRATION COMPONENT
}
{page==="explore" && <Explore/>
}
{page==="saveAndShare" && <SaveAndShare/>
}
{page==="style" && <Style/>
}
{page==="startSelecting" && <StartSelecting setPage={setPage}/>
// HERE WE ARE EXPORTING PROP TO THE CHILD COMPONENT 
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
