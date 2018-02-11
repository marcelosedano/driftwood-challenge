import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import AutocompleteSearchBar from './AutocompleteSearchBar';
import MapMarker from './MapMarker';

const homeMarker = {
  name: 'My House',
  isSaved: true,
  coords: {
    latitude: 34.109520,
    longitude: -118.330652,
  },
};
const DEFAULT_LAT_DELTA = 0.0922;
const DEFAULT_LONG_DELTA = 0.0421;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderMarker = this.renderMarker.bind(this);
  }

  renderMarker(marker, index) {
    return (
      <MapMarker marker={marker} key={index} />
    );
  }

  render() {
    const { selectedMarker, savedMarkers, selectMarker, saveMarker } = this.props;

    const currentRegion = selectedMarker
      ? {
          ...selectedMarker.coordinate,
          latitudeDelta: DEFAULT_LAT_DELTA,
          longitudeDelta: DEFAULT_LONG_DELTA,
        }
      : undefined;

    return (
      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <AutocompleteSearchBar onPress={selectMarker} />
        </View>

        <View style={styles.mapContainer}>
          <MapView style={{ flex: 1 }} showsUserLocation={true} region={currentRegion}>
            {savedMarkers.map(this.renderMarker)}
            {selectedMarker &&
              (<MapMarker marker={selectedMarker} onSavePress={saveMarker} showCallout={true} />)
            }
          </MapView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20 // temp fix to pad status bar (create separate component?)
  },

  mapContainer: {
    height: 400,
  },

  searchContainer: {
    paddingTop: 30,
    height: 200,
  },
});

App.propTypes = {
  selectedMarker: PropTypes.object,
  savedMarkers: PropTypes.array.isRequired,
  selectMarker: PropTypes.func.isRequired,
  saveMarker: PropTypes.func.isRequired,
};

export default App;
