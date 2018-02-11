import React from 'react';
import { Button, Text } from 'react-native';
import { MapView } from 'expo';

const CustomCallout = (props) => (
  <MapView.Callout>
    <Text>{props.marker.name}</Text>
    {props.marker.isSaved
      ? <Text>Saved</Text>
      : <Button title="Save Marker" onPress={() => props.onSavePress(props.marker)} />
    }
  </MapView.Callout>
);

export default CustomCallout;
