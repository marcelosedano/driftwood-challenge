import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.text}>Driftwood Challenge</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    position: 'absolute',
    zIndex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#404040',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Header;
