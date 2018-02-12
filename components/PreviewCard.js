import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { getPlaceImageURI } from '../utils';

const PreviewCard = (props) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: getPlaceImageURI(props.marker.photoReference)}}/>
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.name}>{props.marker.name}</Text>
      <Text>{props.marker.address}</Text>
      <Text>{props.marker.phoneNumber}</Text>
      {props.marker.isSaved
        ? <Text>Saved</Text>
        : <Button title="Save Place" onPress={() => props.onSavePress(props.marker)} />
      }
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },

  imageContainer: {
    flex: 1,
    paddingRight: 5,
  },

  detailsContainer: {
    flex: 1,
    paddingLeft: 5,
  },

  image: {
    width: 150,
    height: 112.5,
    resizeMode: 'contain',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PreviewCard;
