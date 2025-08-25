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
      <Text style={styles.text13}>RS:500</Text>
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
  style={{ height: 40, width: 40,tintColor:'#ff6600ff',marginLeft:-140,marginTop:40}} 
  source={{ uri: 'https://static.thenounproject.com/png/4303174-200.png' }}
   
></Image>
<Text style={styles.text9}>Free Delivery</Text>
 <Image
  style={{ height: 26, width: 26,tintColor:'#ff6600ff',marginLeft:18,marginTop:-22}} 
  source={{ uri: 'https://cdn2.iconfinder.com/data/icons/education-3-25/48/136-512.png' }}
   
></Image>
<Text style={styles.text10}>20-30 mins</Text>
<Image
  style={{ height: 26, width: 26,marginLeft:150,marginTop:-24,tintColor:'#ff6600ff'}} 
  source={{ uri: 'https://images.vexels.com/media/users/3/134186/isolated/preview/dac3ece76e867219bd7205d04986b8c4-star-silhouette-12.png' }}
   
></Image>
<Text style={styles.text11}>4.5</Text>
<Text style={styles.text12}>A soft toasted bun filled with a juicy beef patty, topped with melted cheese, fresh lettuce, tomato, and a touch of creamy sauce — a perfect balance of flavor in every bite</Text>
<Text style={styles.text14}>Toppings</Text>
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
    marginTop:18,
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
    fontSize: 16,
    color: '#030303ff',
    fontWeight:'600'
  },
    text10: {
    marginTop:-26,
    marginLeft:50,
    fontSize: 16,
    color: '#030303ff',
    fontWeight:'600'
  },
    text11: {
    marginTop:-24,
    marginLeft:180,
    fontSize: 16,
    color: '#030303ff',
    fontWeight:'600'
  },
   text12: {
    marginTop:30,
    marginLeft:-140,
    marginRight:90,
    fontSize: 19,
    color: '#030303ff',
    fontWeight:'500'
    ,alignContent:'center',
    alignItems:'center'
  },
    text13: {
    marginTop:9,
    marginLeft:-140,
    fontSize: 30,
    color: '#030303ff',
    fontWeight:'600'
    ,marginBottom:-15
  },
  
});

export default Food;
