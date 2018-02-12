import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Actions', () => {
  it('should create an action to select a marker', () => {
    const marker = {
      name: 'Hollywood Bowl',
      isSaved: false,
      coordinate: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      },
      photoReference: 'abcdefg',
    };
    const expectedAction = {
      type: types.SELECT_MARKER,
      payload: {
        marker,
        region: marker.coordinate,
      }
    };

    expect(actions.selectMarker(marker)).toEqual(expectedAction);
  });

  it('should create an action to save a marker', () => {
    const marker = {
      name: 'Hollywood Bowl',
      isSaved: false,
      coordinate: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      }
    };
    const expectedAction = {
      type: types.SAVE_MARKER,
      marker: {
        name: 'Hollywood Bowl',
        isSaved: true,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        }
      }
    };

    expect(actions.saveMarker(marker)).toEqual(expectedAction);
  });

  it('should create an action to set the region', () => {
    const region = {
      latitude: 34.112562,
      longitude: -118.339106,
      latitudeDelta: 5,
      longitudeDelta: -15,
    };
    const expectedAction = {
      type: types.SET_REGION,
      region: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      }
    };

    expect(actions.setRegion(region)).toEqual(expectedAction);
  });
});
