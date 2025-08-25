import React from "react";
import { View, StyleSheet ,Image} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <Image  
        style={{ height: 100, width: 100,}} 
        source={{ uri: 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-piece-of-dutch-cheese-png-image_13325891.png' }} 
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
  },
});

export default App;
