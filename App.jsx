import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./scr/screens/Home";   
import Food from "./scr/screens/Food";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false , tabBarIcon:()=>(<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }}
              style={{ width: 25, height: 25, tintColor: 'black' }}/>) }} name="Home" component={Home} />
      <Tab.Screen  options={{ headerShown: false , tabBarIcon:()=>(<Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/468/468209.png' }}
              style={{ width: 25, height: 25, tintColor: 'black' }}/>) }} name="Food" component={Food} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
