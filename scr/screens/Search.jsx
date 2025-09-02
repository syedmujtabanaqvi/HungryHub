import { View, Text ,TextInput,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'

const Search = () => {
   const fruits = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Orange" },
  { id: "4", name: "Mango" },
  { id: "5", name: "Grapes" },
];

  return (
    <View>
        <Text style={{color:'#ffc400ff',marginTop:47,marginLeft:20}}>Search</Text>
       <Text style={{color:'#000000ff',marginTop:3,marginLeft:20}}>Find your favourit Food</Text>
      
       <TextInput 
            placeholder="search "
            style={{marginLeft:16,marginTop:10,width:350,borderRadius:70 , borderWidth: 1,}}
            
            ></TextInput>
      <FlatList
      horizontal={true}
  data={fruits}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Text style={{ fontSize: 18, padding: 10 }}>{item.name}</Text>
    
  )}
/>

    </View>
  )
}

export default Search