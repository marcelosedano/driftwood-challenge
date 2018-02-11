import reducer from '../reducer';
import * as types from '../actionTypes';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        selectedMarker: null,
        savedMarkers: [],
      }
    );
  });

  it('should handle SELECT_MARKER for initial state', () => {
    expect(
      reducer(undefined, {
        type: types.SELECT_MARKER,
        marker: {
          name: 'Hollywood Bowl',
          isSaved: false,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
          }
        }
      })
    ).toEqual(
      {
        selectedMarker: {
          name: 'Hollywood Bowl',
          isSaved: false,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
          }
        },
        savedMarkers: []
      }
    );
  });

  it('should handle SELECT_MARKER for existing state', () => {
    const state = {
      selectedMarker: {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
        }
      },
      savedMarkers: []
    };

    expect(
      reducer(state, {
        type: types.SELECT_MARKER,
        marker: {
          name: 'Grauman\'s Chinese Theater',
          isSaved: true,
          coordinate: {
            latitude: 34.102378,
            longitude: -118.340242,
          }
        }
      })
    ).toEqual(
      {
        selectedMarker: {
          name: 'Grauman\'s Chinese Theater',
          isSaved: true,
          coordinate: {
            latitude: 34.102378,
            longitude: -118.340242,
          }
        },
        savedMarkers: []
      }
    );
  });

  it('should handle SAVE_MARKER for initial state', () => {
    expect(
      reducer(undefined, {
        type: types.SAVE_MARKER,
        marker: {
          name: 'Hollywood Bowl',
          isSaved: true,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
          }
        }
      })
    ).toEqual(
      {
        selectedMarker: null,
        savedMarkers: [
          {
            name: 'Hollywood Bowl',
            isSaved: true,
            coordinate: {
              latitude: 34.112562,
              longitude: -118.339106,
            }
          }
        ]
      }
    );
  });

  it('should handle SAVE_MARKER for existing state', () => {
    const state = {
      selectedMarker: {
        name: 'Grauman\'s Chinese Theater',
        isSaved: false,
        coordinate: {
          latitude: 34.102378,
          longitude: -118.340242,
        }
      },
      savedMarkers: [
        {
          name: 'Hollywood Bowl',
          isSaved: true,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
          }
        }
      ]
    };

    expect(
      reducer(state, {
        type: types.SAVE_MARKER,
        marker: {
          name: 'Grauman\'s Chinese Theater',
          isSaved: true,
          coordinate: {
            latitude: 34.102378,
            longitude: -118.340242,
          }
        }
      })
    ).toEqual(
      {
        selectedMarker: null,
        savedMarkers: [
          {
            name: 'Hollywood Bowl',
            isSaved: true,
            coordinate: {
              latitude: 34.112562,
              longitude: -118.339106,
            }
          },
          {
            name: 'Grauman\'s Chinese Theater',
            isSaved: true,
            coordinate: {
              latitude: 34.102378,
              longitude: -118.340242,
            }
          }
        ]
      }
    );
  });
});
