import React from 'react';
import { Animated, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getPlaceImageURI } from '../utils';

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.state = {
      height: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.height,
      {
        toValue: 180,
        duration: 500,
      }
    ).start();
  }

  renderButton(isSaved) {
    const buttonColor = isSaved ? '#bbd5f0' : '#5698db';
    const buttonText = isSaved ? 'Saved' : 'Save Place';

    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          disabled={isSaved}
          onPress={() => this.props.onSavePress(this.props.marker)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const containerStyle = [styles.container, { height: this.state.height }];

    return (
      <Animated.View style={containerStyle}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: getPlaceImageURI(this.props.marker.photoReference)}} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{this.props.marker.name}</Text>
          <Text>{this.props.marker.address}</Text>
          <Text>{this.props.marker.phoneNumber}</Text>
          {this.renderButton(this.props.marker.isSaved)}
        </View>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 0,
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
    fontWeight: 'bold',
  },

  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PreviewCard;
