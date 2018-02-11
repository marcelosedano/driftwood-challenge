import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import ClusteredMapView from 'react-native-map-clustering';
import { MapView } from 'expo';
import AutocompleteSearchBar from './AutocompleteSearchBar';
import CustomCallout from './CustomCallout';

const DEFAULT_REGION = {
  latitude: 34.109520,
  longitude: -118.330652,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderMarker = this.renderMarker.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  // Extracted this into its own component but for some reason imported markers aren't working with react-native-map-clustering
  renderMarker(marker, index) {
    return (
      <MapView.Marker coordinate={marker.coordinate} key={index}>
        <CustomCallout marker={marker} onSavePress={this.props.saveMarker}/>
      </MapView.Marker>
    );
  }

  renderMarkers() {
    const { selectedMarker, savedMarkers } = this.props;
    const markers = savedMarkers.map(this.renderMarker);

    return selectedMarker ? markers.concat(this.renderMarker(selectedMarker, Math.random())) : markers;
  }

  render() {
    const { selectedMarker, selectMarker } = this.props;

    const currentRegion = selectedMarker
      ? { ...DEFAULT_REGION, ...selectedMarker.coordinate } : DEFAULT_REGION;

    return (
      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <AutocompleteSearchBar onPress={selectMarker} />
        </View>

        <View style={styles.mapContainer}>
          <ClusteredMapView style={{ flex: 1 }} showsUserLocation={true} region={currentRegion}>
            {this.renderMarkers()}
          </ClusteredMapView>
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
