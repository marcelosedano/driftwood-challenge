import React from 'react';
import { Button, Text } from 'react-native';
import { MapView } from 'expo';

const MapMarker = (props) => (
  <MapView.Marker coordinate={props.marker.coordinate}>
    <MapView.Callout>
      <Text>{props.marker.name}</Text>
      {props.marker.isSaved
        ? <Text>Saved</Text>
        : <Button title="Save Marker" onPress={() => props.onSavePress(props.marker)} />
      }
    </MapView.Callout>
  </MapView.Marker>
);

export default MapMarker;
