import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ModeSelector = (props) => {
  const getStyles = (styles, selectedStyle, mode) => (
    mode === props.mode ? styles.concat(selectedStyle) : styles
  );
  const searchButtonStyle = getStyles([styles.button], SELECTED_BUTTON_STYLE, 'search');
  const searchButtonTextStyle = getStyles([styles.buttonText], SELECTED_TEXT_STYLE, 'search');
  const savedButtonStyle = getStyles([styles.button], SELECTED_BUTTON_STYLE, 'saved');
  const savedButtonTextStyle = getStyles([styles.buttonText], SELECTED_TEXT_STYLE, 'saved');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={searchButtonStyle}
        disabled={props.mode === 'search'}
        onPress={() => props.onModeSelect('search')}>
        <Text style={searchButtonTextStyle}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={savedButtonStyle}
        disabled={props.mode === 'saved'}
        onPress={() => props.onModeSelect('saved')}>
        <Text style={savedButtonTextStyle}>Saved Places</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 110,
    backgroundColor: 'white',
    zIndex: 10,
  },

  button: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  buttonText: {
    fontSize: 16,
    color: '#797979',
  },
});

const SELECTED_BUTTON_STYLE = { borderBottomWidth: 2, borderColor: 'orange' };
const SELECTED_TEXT_STYLE = { fontWeight: 'bold', color: '#404040' };

export default ModeSelector;
