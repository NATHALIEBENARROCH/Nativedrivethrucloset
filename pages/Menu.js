import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Menu({setPage}) {
  return (
   
<View style={styles.bar}>

<TouchableOpacity onPress={()=>{setPage("dailyInspiration")}} style={styles.Logoutbtn}>
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
    width: 260,
    height: 60,
    borderRadius: 15,
    borderWidth:4,
    borderColor:'white',
    shadowColor: "#fff",
shadowOffset: {
width: 10,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
  },

  menuitems: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});