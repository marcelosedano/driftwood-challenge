import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getPlaceImageURI } from '../utils';

const PreviewCard = (props) => {
  const renderButton = isSaved => {
    const buttonColor = isSaved ? '#bbd5f0' : '#5698db';
    const buttonText = isSaved ? 'Saved' : 'Save Place';

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          disabled={isSaved}
          onPress={() => props.onSavePress(props.marker)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: getPlaceImageURI(props.marker.photoReference)}} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{props.marker.name}</Text>
        <Text>{props.marker.address}</Text>
        <Text>{props.marker.phoneNumber}</Text>
        {renderButton(props.marker.isSaved)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 180,
    width: '100%',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  imageContainer: {
    flex: 1,
    paddingRight: 5,
  },

  detailsContainer: {
    flex: 1,
    paddingLeft: 5,
  },

  buttonContainer: {
    marginTop: 10,
  },

  image: {
    width: 150,
    height: 112.5,
    resizeMode: 'contain',
  },

  button: {
    alignItems: 'center',
    padding: 10,
  },

  buttonText: {
    color: 'white',
  },

  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PreviewCard;
