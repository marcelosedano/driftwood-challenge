import React from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import SavedListItem from './SavedListItem';

class SavedList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
    this.state = {
      height: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.height,
      {
        toValue: 300,
        duration: 500,
      }
    ).start();
  }

  renderItem({ item }) {
    return (
      <SavedListItem marker={item} onPress={this.props.onPress} />
    );
  }

  render() {
    const containerStyle = [styles.container, { height: this.state.height }];

    return (
      <Animated.View style={containerStyle}>
        {this.props.savedMarkers.length
          ? (
            <FlatList
            style={styles.list}
            data={this.props.savedMarkers}
            keyExtractor={(_, index) => index}
            renderItem={this.renderItem} />
          )
          : <Text style={styles.emptyListText}>Find some new places by tapping on Search!</Text>
        }
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    height: 300,
    width: '100%',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    width: '100%',
  },

  emptyListText: {
    color: '#797979',
  }
});

export default SavedList;
