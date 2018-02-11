import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Actions', () => {
  it('should create an action to select a marker', () => {
    const placeDetails = {
      name: 'Hollywood Bowl',
      geometry: {
        location: {
          lat: 34.112562,
          lng: -118.339106,
        }
      }
    };
    const expectedAction = {
      type: types.SELECT_MARKER,
      marker: {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
        }
      }
    };

    expect(actions.selectMarker(placeDetails)).toEqual(expectedAction);
  });

  it('should create an action to save a marker', () => {
    const marker = {
      name: 'Hollywood Bowl',
      isSaved: false,
      coordinate: {
        latitude: 34.112562,
        longitude: -118.339106,
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
        }
      }
    };

    expect(actions.saveMarker(marker)).toEqual(expectedAction);
  });
});
