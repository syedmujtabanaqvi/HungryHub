import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Food = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🍔 This is Food Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Food;
