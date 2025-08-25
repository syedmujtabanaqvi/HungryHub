import React from 'react';
import { View, Text, StyleSheet,ImageBackground ,Image } from 'react-native';

const Food = () => {
  return (
    <View style={styles.container}>
      
       <ImageBackground  
  style={{ height: 267, width: 320, marginTop:-260 ,marginRight:-240}} 
  source={{ uri: 'https://static.vecteezy.com/system/resources/previews/027/144/908/non_2x/delicious-hawaiian-burger-isolated-on-transparent-background-free-png.png' }} 
>

      <Text style={styles.text}>Wendy's Burger</Text>
      <Text style={styles.text1}>CheeseBurger</Text>
          <ImageBackground  
  style={{ height: 120, width: 120, marginTop:-30 ,marginLeft:-140}} 
  source={{ uri: 'https://freesvg.org/img/16231558095-star-rating.png' }}
   
></ImageBackground>

<Text style={styles.text2}>4.9/5</Text>
<Text style={styles.text3}>Calories</Text>
<Text style={styles.text4}>365 Cal</Text>
<Text style={styles.text5}>Protein</Text>
<Text style={styles.text6}>35g</Text>
<Text style={styles.text7}>Bun Type</Text>
<Text style={styles.text8}>Whole Wheat</Text>
 <Image
  style={{ height: 40, width: 40,tintColor:'#ff6600ff',marginLeft:-140,marginTop:50}} 
  source={{ uri: 'https://static.thenounproject.com/png/4303174-200.png' }}
   
></Image>
<Text style={styles.text9}>Free Delivery</Text>
</ImageBackground>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
  text: {
    marginTop:-20,
    marginLeft:-140,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  }, text1: {
    marginTop:8,
    marginLeft:-140,
    fontSize: 23,
    color: '#7c7c7cff',
  }, text2: {
    marginTop:-73,
    marginLeft:-9,
    fontSize: 20,
    color: '#333',
  },
   text3: {
    marginTop:30,
    marginLeft:-139,
    fontSize: 20,
    color: '#7c7c7cff',
  },
   text4: {
    marginTop:-3,
    marginLeft:-139,
    fontSize: 17,
    color: '#333',
    fontWeight:'bold'
  },text5: {
    marginTop:-46,
    marginLeft:-49,
    fontSize: 20,
    color: '#7c7c7cff',
    
  },text6: {
    marginTop:-4,
    marginLeft:-49,
    fontSize: 17,
    color: '#333',
    fontWeight:'bold'
  },
  text7: {
    marginTop:10,
    marginLeft:-139,
    fontSize: 20,
    color: '#7c7c7cff'
  },
  text8: {
    marginTop:-4,
    marginLeft:-139,
    fontSize: 20,
    color: '#030303ff',
    fontWeight:'bold'
  },
   text9: {
    marginTop:-33,
    marginLeft:-96,
    fontSize: 20,
    color: '#030303ff',
    fontWeight:'600'
  },
  
});

export default Food;
