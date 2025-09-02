import React, { useState } from "react";
import { View, StyleSheet ,Image, TouchableOpacity,TextInput,Button} from "react-native";
import { Text } from "react-native-gesture-handler";


const App = () => {
  const [Email , setEmail] = useState ('')
   const [Pass , setPassword] = useState ('')
  const [submitText,setsubmitText] = useState ('')

  const handelsubmit =() =>{
setsubmitText(Email)


  }
  return (
    <View style={styles.container}>
      <Image  
        style={{ height: 400, width: 400,borderRadius:39,marginTop:-80}} 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05K20dt_5_MMno5uwECxEfdCeiAbp96Fvyw&s' }} 
      ></Image>
      <TouchableOpacity style={{}}> </TouchableOpacity>
     <Text style={{fontSize:20 , marginTop:50,marginLeft:26}}> Email</Text>
      <TextInput 
      placeholder=""
      style={{marginLeft:26,width:330,  borderBottomWidth: 1,borderBottomColor: '#000000ff',marginTop:-5}}
      value={Email}
      onChangeText={(Email)=>setEmail(Email)}
      />
  <Text style={{fontSize:20 , marginTop:20,marginLeft:26}}> Password</Text>
    
       <TextInput 
      placeholder=""
      style={{marginLeft:26,width:330,borderBottomWidth: 1, borderBottomColor: '#000000ff',marginTop:-5}}
      value={Pass}
      onChangeText={(Pass)=>setPassword(Pass)}
      />
      <TouchableOpacity  onPress={handelsubmit} style={{fontSize:20,color:'#0000',marginTop:30,marginLeft:15,height:40,width:360,borderRadius:20, backgroundColor: '#ffaf02ff'}}  >
        <Text style={{ fontSize: 20, color: '#ffffffff',paddingLeft:150,paddingTop:6 }}>Sing In</Text>

</TouchableOpacity>

      {submitText? (<Text>Result :{Email}</Text>):null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },

});

export default App;
