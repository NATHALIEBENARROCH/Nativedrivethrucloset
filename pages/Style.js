import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Style() {
return (
<>
<View style={styles.container}>
<View>
<TouchableOpacity onPress={()=>{nextpage()}} style ={styles.TouchableOpacity}>
  <Text style={styles.login}>Login</Text>
</TouchableOpacity>

</View>
  <Text>Style</Text>
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