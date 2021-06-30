import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './Menu';
import Logoutbutton from './Logoutbutton';



export default function StartSelecting({setPage}) {
  return (
    <>


  <View style={styles.container}>
  <Logoutbutton setPage={setPage}/>
  {/* HERE WE ARE EXPORTING PROP TO THE CHILD COMPONENT  */}
      <Text>StartSelecting</Text>

      <Menu setPage={setPage}/>
    </View>
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