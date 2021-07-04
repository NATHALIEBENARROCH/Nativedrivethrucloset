import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Menu({setPage}) {
  return (
   
<View style={styles.bar}>

<TouchableOpacity onPress={()=>{setPage("dailyInspiration")}} style={styles.Logoutbtn}>
<Image
style={styles.menuitems}
source={require('../assets/bar/HOME.png')}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setPage("startSelecting")}} style={styles.Logoutbtn}>
<Image
style={styles.menuitems}
source={require('../assets/bar/LOGO.png')}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setPage("camera")}} style={styles.Logoutbtn}>
<Image
style={styles.menuitems}
source={require('../assets/bar/PLUS.png')}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setPage("style")}} style={styles.Logoutbtn}>
<Image
style={styles.menuitems}
source={require('../assets/bar/WAND.png')}
/>
</TouchableOpacity>

<TouchableOpacity onPress={()=>{setPage("saveAndShare")}} style={styles.Logoutbtn}>
<Image
style={styles.menuitems}
source={require('../assets/bar/PROFILE.png')}
/>
</TouchableOpacity>

</View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'black',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom:20,
    width: 380,
    height: 60,
    borderRadius: 15,
  },

  menuitems: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});