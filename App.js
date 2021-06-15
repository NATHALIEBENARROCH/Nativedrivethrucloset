import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './pages/Camera';
import DailyInspiration from './pages/DailyInspiration';
import Explore from './pages/Explore';
import LogIn from './pages/LogIn';
import SaveAndShare from './pages/SaveAndShare';
import SelectClothing from './pages/SelectClothing';
import StartSelecting from './pages/StartSelecting';

export default function App() {
  let [page, setPage] = useState("logIn")

  return (
    <>
{page==="logIn" && <LogIn nextpage={()=>{setPage("dailyInspiration")}}/>
}
{page==="camera" && <Camera/>
}
{page==="dailyInspiration" && <DailyInspiration/>
}
{page==="explore" && <Explore/>
}
{page==="saveAndShare" && <SaveAndShare/>
}
{page==="selectClothing" && <SelectClothing/>
}
{page==="startSelecting" && <StartSelecting/>
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
