import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_API_KEY = 'AIzaSyDNOPoAbbXHEwP4lwfJwArVx7BTDCJxqmw';

const AutocompleteSearchBar = (props) => (
  <GooglePlacesAutocomplete
    placeholder='Search'
    minLength={2} // minimum length of text to search
    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
    listViewDisplayed={false}    // true/false/undefined
    fetchDetails={true}
    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      // console.log(details);
      props.onPress(details);
    }}
    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: GOOGLE_API_KEY,
      language: 'en', // language of the results
      types: 'establishment' // default: 'geocode'
    }}
    styles={styles}
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GooglePlacesSearchQuery={{
      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      rankby: 'distance',
      types: 'food'
    }}
    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
  />
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  textInputContainer: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  description: {
    fontWeight: 'bold'
  },
});

export default AutocompleteSearchBar;
