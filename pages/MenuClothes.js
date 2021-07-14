import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MenuClothes({setCategory, section }) {
  return (
   
<View style={styles.bar}>

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("coats")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Coats</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("jackets")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Jackets</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("cardigans")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Cardigans</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("sweaters")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Sweaters</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("blouses")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Blouses</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("tshirts")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Tshirts</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("dresses")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Dresses</Text>
</TouchableOpacity>
}

{section==="middle"&&
<TouchableOpacity onPress={()=>{setCategory("pants")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Pants</Text>
</TouchableOpacity>
}

{section==="middle"&&
<TouchableOpacity onPress={()=>{setCategory("skirts")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Skirts</Text>
</TouchableOpacity>
}
{section==="middle"&&
<TouchableOpacity onPress={()=>{setCategory("shorts")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Shorts</Text>
</TouchableOpacity>
}

{section==="top"&&
<TouchableOpacity onPress={()=>{setCategory("jumpsuits")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Jumpsuits</Text>
</TouchableOpacity>
}

{section==="bottom"&&
<TouchableOpacity onPress={()=>{setCategory("bags")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Bags</Text>
</TouchableOpacity>
}
{section==="bottom"&&
<TouchableOpacity onPress={()=>{setCategory("shoes")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Shoes</Text>
</TouchableOpacity>
}

{section==="bottom"&&
<TouchableOpacity onPress={()=>{setCategory("shoes")}} style={styles.Logoutbtn}>
<Text style={styles.category}>Accessories</Text>
</TouchableOpacity>
}


</View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'black',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    left:-20,
    bottom:20,
    width: 80,
    height: 260,
    borderRadius: 15,
  },

  category: {
color: 'white',
  },

  menuitems: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});