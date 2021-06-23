import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Menu() {
  return (
   
  <View style={styles.bar}>

     <Image
style={styles.home}
source={require('../assets/bar/GV HOME.png')}
/>

</View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom:20,
    width: 250,
    height: 250,
  
  },

  home: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom:20,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  
  },
});