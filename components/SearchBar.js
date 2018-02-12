import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '../constants';

const SearchBar = (props) => (
  <GooglePlacesAutocomplete
    placeholder='Search for businesses...'
    minLength={2}
    returnKeyType={'search'}
    listViewDisplayed={props.displayList}
    fetchDetails={true}
    textInputProps={{ onFocus: props.onFocus }}
    onPress={(data, details = null) => props.onPress(details)}
    query={{
      key: GOOGLE_API_KEY,
      language: 'en',
      types: 'establishment'
    }}
    styles={styles}
    nearbyPlacesAPI='GooglePlacesSearch'
    GooglePlacesSearchQuery={{
      rankby: 'distance',
      types: 'food'
    }}
    debounce={200}
    enablePoweredByContainer={false}
  />
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  listView: {
    marginTop: 36,
    backgroundColor: 'white',
  },
  textInputContainer: {
    width: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    height: 30,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 20,
  },
  description: {
    fontWeight: 'bold'
  },
});

export default SearchBar;
