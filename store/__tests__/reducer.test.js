import reducer, { DEFAULT_REGION } from '../reducer';
import * as types from '../actionTypes';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: DEFAULT_REGION,
      }
    );
  });

  it('should handle SELECT_MARKER for initial state', () => {
    expect(
      reducer(undefined, {
        type: types.SELECT_MARKER,
        payload: {
          marker: {
            name: 'Hollywood Bowl',
            isSaved: false,
            coordinate: {
              latitude: 34.112562,
              longitude: -118.339106,
            }
          },
          region: {
            latitude: 34.112562,
            longitude: -118.339106,
            latitudeDelta: 5,
            longitudeDelta: -15,
          },
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
        savedMarkers: [],
        currentRegion: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
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
      savedMarkers: [],
      currentRegion: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      },
    };

    expect(
      reducer(state, {
        type: types.SELECT_MARKER,
        payload: {
          marker: {
            name: 'Grauman\'s Chinese Theater',
            isSaved: true,
            coordinate: {
              latitude: 34.102378,
              longitude: -118.340242,
            }
          },
          region: {
            latitude: 34.102378,
            longitude: -118.340242,
            latitudeDelta: 23,
            longitudeDelta: -18,
          },
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
        savedMarkers: [],
        currentRegion: {
          latitude: 34.102378,
          longitude: -118.340242,
          latitudeDelta: 23,
          longitudeDelta: -18,
        },
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
        ],
        currentRegion: DEFAULT_REGION,
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
      ],
      currentRegion: DEFAULT_REGION,
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
        ],
        currentRegion: DEFAULT_REGION,
      }
    );
  });

  it('should handle SET_REGION for initial state', () => {
    expect(
      reducer(undefined, {
        type: types.SET_REGION,
        region: {
          latitude: 12.345,
          longitude: -678.901,
          latitudeDelta: 0.9876,
          longitudeDelta: 0.5432,
        }
      })
    ).toEqual(
      {
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: {
          latitude: 12.345,
          longitude: -678.901,
          latitudeDelta: 0.9876,
          longitudeDelta: 0.5432,
        },
      }
    );
  });

  it('should handle SET_REGION for existing state', () => {
    const state = {
      selectedMarker: {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
        }
      },
      savedMarkers: [],
      currentRegion: {
        latitude: 12.345,
        longitude: -678.901,
        latitudeDelta: 0.9876,
        longitudeDelta: 0.5432,
      },
    };

    expect(
      reducer(state, {
        type: types.SET_REGION,
        region: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 0.9876,
          longitudeDelta: 0.5432,
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
        savedMarkers: [],
        currentRegion: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 0.9876,
          longitudeDelta: 0.5432,
        },
      }
    );
  });
});
