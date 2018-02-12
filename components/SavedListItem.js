import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getPlaceImageURI } from '../utils';

const SavedListItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.marker)}>
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: getPlaceImageURI(props.marker.photoReference)}} />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.nameText}>{props.marker.name}</Text>
            <Text>{props.marker.address}</Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 85,
    borderBottomWidth: 0.5,
    borderBottomColor: '#797979',
  },

  imageContainer: {
    flex: 1,
    paddingRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailsContainer: {
    flex: 2,
    paddingLeft: 5,
    justifyContent: 'center',
  },

  image: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },

  nameText: {
    fontWeight: 'bold',
  },
});

export default SavedListItem;
