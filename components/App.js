import React from 'react';
import PropTypes from 'prop-types';
import { Button, Keyboard, StyleSheet, Text, View } from 'react-native';
import ClusteredMapView from 'react-native-map-clustering';
import { MapView } from 'expo';

import Header from './Header';
import SearchBar from './SearchBar';
import ModeSelector from './ModeSelector';
import PreviewCard from './PreviewCard';
import SavedList from './SavedList';
import { createMarker, getClusterRegion } from '../utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.renderMarker = this.renderMarker.bind(this);
    this.renderMarkers = this.renderMarkers.bind(this);
    this.handleSearchBarPress = this.handleSearchBarPress.bind(this);
    this.handleMarkerPress = this.handleMarkerPress.bind(this);
    this.handleClusterPress = this.handleClusterPress.bind(this);
    this.handleListItemPress = this.handleListItemPress.bind(this);
  }

  handleSearchBarPress(placeDetails) {
    const marker = createMarker(placeDetails);
    this.props.selectMarker(marker);
    this.props.setRegion(marker.coordinate);
    this.props.showPreviewCard();
  }

  handleListItemPress(marker) {
    this.props.selectMarker(marker);
    this.props.showPreviewCard();
    this.props.setRegion(marker.coordinate);
    this.props.selectMode('search');
  }

  handleMarkerPress(marker) {
    if (this.props.selectedMarker !== marker) {
      this.props.selectMarker(marker);
    }

    this.props.showPreviewCard();
  }

  handleClusterPress(markers) {
    this.props.setRegion(getClusterRegion(markers, this.mapView.state.region));
  }

  // Extracted this into its own component but for some reason imported markers aren't working with react-native-map-clustering
  renderMarker(marker, index) {
    return (
      <MapView.Marker
        key={index}
        title={marker.name}
        coordinate={marker.coordinate}
        onSelect={() => this.handleMarkerPress(marker)}
        onDeselect={this.props.hidePreviewCard} />
    );
  }

  renderMarkers() {
    const { selectedMarker, savedMarkers } = this.props;
    const markers = selectedMarker && !selectedMarker.isSaved
      ? savedMarkers.concat(selectedMarker)
      : savedMarkers;

    return markers.map(this.renderMarker);
  }

  render() {
    const {
      currentMode,
      currentRegion,
      selectedMarker,
      savedMarkers,
      isPreviewCardOpen,
      selectMode,
      saveMarker,
      setRegion
    } = this.props;
    Keyboard.dismiss(); // Hack for weird keyboard dismissal behavior

    return (
      <View style={styles.container}>

        <Header />

        <View style={styles.searchContainer}>
          <SearchBar
            displayList={!selectedMarker}
            onFocus={() => selectMode('search')}
            onPress={this.handleSearchBarPress} />
        </View>

        <ModeSelector mode={currentMode} onModeSelect={selectMode} />

        <View style={styles.mapContainer}>
          <ClusteredMapView
            style={{ flex: 1 }}
            ref={r => this.mapView = r}
            region={currentRegion}
            onRegionChangeComplete={setRegion}
            onClusterPress={this.handleClusterPress}>
            {this.renderMarkers()}
          </ClusteredMapView>
        </View>

        {isPreviewCardOpen && (
          <PreviewCard marker={selectedMarker} onSavePress={saveMarker} />
        )}

        {currentMode === 'saved' && (
          <SavedList savedMarkers={savedMarkers} onPress={this.handleListItemPress} />
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: '100%',
  },

  mapContainer: {
    height: '100%',
  },

  searchContainer: {
    marginTop: 70,
    width: '100%',
    position: 'absolute',
    zIndex: 10,
  },
});

App.propTypes = {
  currentMode: PropTypes.string,
  currentRegion: PropTypes.object,
  selectedMarker: PropTypes.object,
  savedMarkers: PropTypes.array.isRequired,
  isPreviewCardOpen: PropTypes.bool.isRequired,
  selectMode: PropTypes.func.isRequired,
  selectMarker: PropTypes.func.isRequired,
  deselectMarker: PropTypes.func.isRequired,
  saveMarker: PropTypes.func.isRequired,
  setRegion: PropTypes.func.isRequired,
  showPreviewCard: PropTypes.func.isRequired,
  hidePreviewCard: PropTypes.func.isRequired,
};

export default App;
