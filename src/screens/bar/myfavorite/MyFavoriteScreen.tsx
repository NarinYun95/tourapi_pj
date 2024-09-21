import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyFavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MyFavoriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default MyFavoriteScreen;