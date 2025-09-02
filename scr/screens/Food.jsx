import React from 'react';
import { View, Text, StyleSheet,ImageBackground ,Image ,FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const Food = ({ navigation }) => {

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView style={styles.container}>
           <TouchableOpacity onPress={handleBack}><Image 
  style={{ height: 30, width: 30, marginTop:30, marginLeft:20}} 
  source={{ uri: 'https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/back-arrow-icon.png' }} 
/></TouchableOpacity>
          <Image 
  style={{ height: 30, width: 30, marginTop:-28, marginLeft:330}} 
  source={{ uri: 'https://www.iconpacks.net/icons/1/free-search-icon-337-thumb.png' }} 
/>
<Text style={styles.text}>Wendy's Burger</Text>
      <Text style={styles.text1}>CheeseBurger</Text>
      <Text style={styles.text13}>RS:500</Text>
       <Image  
  style={{ height: 267, width: 320,marginLeft:200,marginTop:-60}} 
  source={{ uri: 'https://static.vecteezy.com/system/resources/previews/027/144/908/non_2x/delicious-hawaiian-burger-isolated-on-transparent-background-free-png.png' }} 
/>


      
          <ImageBackground  
  style={{ height: 120, width: 120, marginTop:-220 ,marginLeft:14}} 
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
  style={{ height: 40, width: 40,tintColor:'#ff6600ff',marginLeft:10,marginTop:40}} 
  source={{ uri: 'https://static.thenounproject.com/png/4303174-200.png' }}
   
/>
<Text style={styles.text9}>Free Delivery</Text>
 <Image
  style={{ height: 26, width: 26,tintColor:'#ff6600ff',marginLeft:156,marginTop:-22}} 
  source={{ uri: 'https://cdn2.iconfinder.com/data/icons/education-3-25/48/136-512.png' }}
   
/>
<Text style={styles.text10}>20-30 mins</Text>
<Image
  style={{ height: 26, width: 26,marginLeft:295,marginTop:-24,tintColor:'#ff6600ff'}} 
  source={{ uri: 'https://images.vexels.com/media/users/3/134186/isolated/preview/dac3ece76e867219bd7205d04986b8c4-star-silhouette-12.png' }}/>
<Text style={styles.text11}>4.5</Text>
<Text style={styles.text12}>A soft toasted bun filled with a juicy beef patty, topped with melted cheese, fresh lettuce, tomato, and a touch of creamy sauce — a perfect balance of flavor in every bite</Text>
<Text style={styles.text15}>Toppings</Text>
<View style={styles.box1}>     
   <Image style={{ height: 60, width: 60 ,marginLeft:14,marginTop:16}} 
  source={{ uri: 'https://freesvg.org/img/Onion.png' }} 
/></View>
<View style={styles.box2}><Image  
  style={{ height: 60, width: 60 ,marginLeft:14,marginTop:16}} 
  source={{ uri: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA3L3dvcmxkZmFjZXNsYWJfcGhvdG9fb2ZfYV9jaGVkZGFyX3RvcF92aWV3X2lzb2xhdGVkX29uX3doaXRlX2JhY184Y2Y2ZDFjZi1mNDY4LTQ3ZTAtYWRhMC1mYjY5ODEzN2E5ZWYucG5n.png' }} 
/></View>
<View style={styles.box3}></View>
<View style={styles.box4}></View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  text: {
    marginTop:20,
    marginLeft:14,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  }, text1: {
    marginTop:8,
    marginLeft:14,
    fontSize: 23,
    color: '#7c7c7cff',
  }, text2: {
    marginTop:-73,
    marginLeft:150,
    fontSize: 20,
    color: '#333',
  },
   text3: {
    marginTop:18,
    marginLeft:20,
    fontSize: 20,
    color: '#7c7c7cff',
  },
   text4: {
    marginTop:-3,
    marginLeft:20,
    fontSize: 17,
    color: '#333',
    fontWeight:'bold'
  },text5: {
    marginTop:-46,
    marginLeft:120,
    fontSize: 20,
    color: '#7c7c7cff',
    
  },text6: {
    marginTop:-4,
    marginLeft:120,
    fontSize: 17,
    color: '#333',
    fontWeight:'bold'
  },
  text7: {
    marginTop:10,
    marginLeft:20,
    fontSize: 20,
    color: '#7c7c7cff'
  },
  text8: {
    marginTop:-4,
    marginLeft:20,
    fontSize: 20,
    color: '#030303ff',
    fontWeight:'bold'
  },
   text9: {
    marginTop:-30,
    marginLeft:50,
    fontSize: 16,
    color: '#030303ff',
    fontWeight:'600'
  },
    text10: {
    marginTop:-24,
    marginLeft:188,
    fontSize: 16,
    color: '#030303ff',
    fontWeight:'600'
  },
    text11: {
    marginTop:-24,
    marginLeft:330,
    fontSize: 16,
    color: '#030303ff',
    fontWeight:'600'
  },
   text12: {
    marginTop:30,
    marginLeft:14,
    marginRight:14,
    fontSize: 19,
    color: '#030303ff'
   
    ,alignContent:'center',
    alignItems:'center'
  },
    text13: {
    marginTop:9,
    marginLeft:17,
    fontSize: 30,
    color: '#030303ff',
    fontWeight:'600'
    ,marginBottom:-15
  },
  text14: {
    marginTop:-6,
    marginLeft:140,
    fontSize: 28,
    color: '#030303ff',
    fontWeight:'600'
    ,marginBottom:-15
  },
  text15: {
    marginTop:-6,
    marginLeft:10,
    fontSize: 28,
    color: '#030303ff',
    fontWeight:'600'
    ,marginBottom:-15
  },
   box1: {
    marginTop:30,
    marginLeft:210,
    width: 90,
    height: 90,
    borderRadius:20,
    backgroundColor: "#ddddddff",
    elevation: 20,
  },
   box2: {
    marginTop:-90,
    marginLeft:10,
    width: 90,
    height: 90,
    backgroundColor: "#ddddddff",
    borderRadius:20,
    elevation: 20,

  },
   box3: {
    marginTop:-90,
    marginLeft:110,
    width: 90,
    height: 90,
    borderRadius:20,
    backgroundColor: "#ddddddff",
    elevation: 20,
  },
   box4: {
    marginTop:-90,
    marginLeft:310,
    width: 90,
    height: 90,
    borderRadius:20,
    backgroundColor: "#ddddddff",
    elevation: 20,
  },
});

export default Food;
