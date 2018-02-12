import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import ClusteredMapView from 'react-native-map-clustering';
import { MapView } from 'expo';

import AutocompleteSearchBar from './AutocompleteSearchBar';
import CustomCallout from './CustomCallout';
import PreviewCard from './PreviewCard';
import { createMarker } from '../utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderMarker = this.renderMarker.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
    this.handleSearchBarPress = this.handleSearchBarPress.bind(this);
    this.handleMarkerPress = this.handleMarkerPress.bind(this);
  }

  handleSearchBarPress(placeDetails) {
    const marker = createMarker(placeDetails);
    this.props.selectMarker(marker);
  }

  handleMarkerPress(marker) {
    if (this.props.selectedMarker !== marker) {
      this.props.selectMarker(marker);
    }
  }

  // Extracted this into its own component but for some reason imported markers aren't working with react-native-map-clustering
  renderMarker(marker, index) {
    return (
      <MapView.Marker
        key={index}
        title={marker.name}
        coordinate={marker.coordinate}
        onSelect={() => this.handleMarkerPress(marker)}
      />
    );
  }

  renderMarkers() {
    const { selectedMarker, savedMarkers } = this.props;
    const markers = savedMarkers.map(this.renderMarker);

    return selectedMarker && !selectedMarker.isSaved
      ? markers.concat(this.renderMarker(selectedMarker, Math.random()))
      : markers;
  }

  render() {
    const { currentRegion, selectedMarker, saveMarker, setRegion } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.searchContainer}>
          <AutocompleteSearchBar onPress={this.handleSearchBarPress} />
        </View>

        <View style={styles.mapContainer}>
          <ClusteredMapView
            style={{ flex: 1 }}
            ref={r => this.mapView = r}
            region={currentRegion}
            onRegionChangeComplete={setRegion}
          >
            {this.renderMarkers()}
          </ClusteredMapView>
        </View>

        {selectedMarker && <PreviewCard marker={selectedMarker} onSavePress={saveMarker} />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20 // temp fix to pad status bar (create separate component?)
  },

  mapContainer: {
    height: '100%',
  },

  searchContainer: {
    paddingTop: 20,
    height: 200,
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },
});

App.propTypes = {
  currentRegion: PropTypes.object,
  selectedMarker: PropTypes.object,
  savedMarkers: PropTypes.array.isRequired,
  selectMarker: PropTypes.func.isRequired,
  saveMarker: PropTypes.func.isRequired,
  setRegion: PropTypes.func.isRequired,
};

export default App;
