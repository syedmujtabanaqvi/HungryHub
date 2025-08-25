import { Pressable, StyleSheet, Text, View,ScrollView ,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{justifyContent:'center',alignContent:'center'}}>
    <ScrollView> 
        <Text style={{marginLeft:15, paddingTop:40,fontSize:17,color:'#ffa702ff'}}> DELIVER TO</Text>
        <Text style={{marginLeft:15,fontSize:20,marginTop:-5}}> Syed Mujtaba Ali </Text>
         <Pressable style={styles.button1} >
      <Image 
        style={{ marginLeft:12, height: 32, width: 32  ,marginTop:9,tintColor:'white'}} 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/468/468209.png' }} 
      />
       
      </Pressable>
        <Pressable style={styles.button} >
       <Image 
        style={{ marginLeft:150,boxSizing:20, height: 150, width: 200  ,marginTop:40}} 
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png' }} 
      />
        <Text style={styles.text1}>
          SUMMER 
          </Text> <Text style={styles.text1two}>
          
          COMBO</Text>
         
      </Pressable>
      <Pressable style={styles.button2} >
        <Image 
        style={{ marginLeft:-10, height: 167, width: 200  ,marginTop:20}} 
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/027/144/908/non_2x/delicious-hawaiian-burger-isolated-on-transparent-background-free-png.png' }} 
      />
      <Text style={styles.text2}>
          BURGER
          </Text> <Text style={styles.text2two}>
          
          BASH</Text>
      </Pressable>
      <Pressable style={styles.button3} >
        <Text style={styles.text4}>
          PIZZA
          </Text> <Text style={styles.text4two}>
          
          PARTY</Text>
              <Image 
        style={{ marginLeft:150,height: 100, width: 200  ,marginTop:-50}} 
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/045/383/391/small_2x/a-cheesy-delicious-pizza-with-tasty-pepperoni-on-a-transparent-background-png.png' }} 
      />
      </Pressable>
      <Pressable style={styles.button4} >
          <Image 
        style={{ marginLeft:8, height: 167, width: 200  ,marginTop:20}} 
        source={{ uri: 'https://www.pngplay.com/wp-content/uploads/9/Breakfast-Burrito-PNG-Photos.png' }} 
      />
        <Text style={styles.text3}>
          BURRITO
          </Text> <Text style={styles.text3two}>
          
          DELIGHT</Text>
      </Pressable>
    </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
 
 
  button: {
    height:200,
    width:362,
    backgroundColor: "red",
   marginLeft: 15,
    borderRadius: 19,
  },
    button1: {
    height:55,
    width:55,
   marginTop:-46, 
  marginBottom:20,
    backgroundColor: "#000",
   marginLeft: 310,
    borderRadius: 70,
  },
   button2: {
    height:200,
    width:362,
   marginTop:18, 
    backgroundColor: "#eb7201ff",
   marginLeft: 15,
    borderRadius: 19,
  },
   button3: {
    height:200,
    width:362,
   marginTop:18, 
    backgroundColor: "#26a008ff",
   marginLeft: 15,
    borderRadius: 19,
  },
    button4: {
    height:200,
    width:362,
   marginTop:18, 
    backgroundColor: "#ffd000ff",
   marginLeft: 15,
    borderRadius: 19,
    marginBottom:30
  },
  text1: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-180,
    marginLeft:13
  },
   text1two: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-19,
    marginLeft:13
  },
  text4: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:10,
    marginLeft:13
  },
   text4two: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-19,
    marginLeft:13
  },
   text2: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-180,
    marginLeft:200
  },
   text2two: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-20,
    marginLeft:200
  },
     text3: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-176,
    marginLeft:190
  },
   text3two: {
    color: "white",
    fontSize: 45,
    fontFamily:'sans-serif-condensed',
    marginTop:-19,
    marginLeft:190
  },
  
  
});