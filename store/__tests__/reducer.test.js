import reducer, { INITIAL_REGION } from '../reducer';
import * as types from '../actionTypes';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        currentMode: 'search',
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: INITIAL_REGION,
        isPreviewCardOpen: false,
      }
    );
  });

  it('should handle SELECT_MODE', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: null,
      savedMarkers: [],
      currentRegion: INITIAL_REGION,
      isPreviewCardOpen: false,
    };

    expect(
      reducer(state, {
        type: types.SELECT_MODE,
        mode: 'saved',
      })
    ).toEqual(
      {
        currentMode: 'saved',
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: INITIAL_REGION,
        isPreviewCardOpen: false,
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
            latitudeDelta: 5,
            longitudeDelta: -15,
          },
          photoReference: 'abcdefg',
        },
      })
    ).toEqual(
      {
        currentMode: 'search',
        selectedMarker: {
          name: 'Hollywood Bowl',
          isSaved: false,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
            latitudeDelta: 5,
            longitudeDelta: -15,
          },
          photoReference: 'abcdefg',
        },
        savedMarkers: [],
        currentRegion: INITIAL_REGION,
        isPreviewCardOpen: false,
      }
    );
  });

  it('should handle SELECT_MARKER for existing state', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
        photoReference: 'abcdefg',
      },
      savedMarkers: [],
      currentRegion: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      },
      isPreviewCardOpen: false,
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
            latitudeDelta: 23,
            longitudeDelta: -18,
          },
          photoReference: 'hijklmn',
        }
      })
    ).toEqual(
      {
        currentMode: 'search',
        selectedMarker: {
          name: 'Grauman\'s Chinese Theater',
          isSaved: true,
          coordinate: {
            latitude: 34.102378,
            longitude: -118.340242,
            latitudeDelta: 23,
            longitudeDelta: -18,
          },
          photoReference: 'hijklmn',
        },
        savedMarkers: [],
        currentRegion: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
        isPreviewCardOpen: false,
      }
    );
  });

  it('should handle DESELECT_MARKER', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
        photoReference: 'abcdefg',
      },
      savedMarkers: [],
      currentRegion: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      },
      isPreviewCardOpen: false,
    };

    expect(
      reducer(state, {
        type: types.DESELECT_MARKER,
      })
    ).toEqual(
      {
        currentMode: 'search',
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
        isPreviewCardOpen: false,
      }
    );
  });

  it('should handle SAVE_MARKER for existing state', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: {
        name: 'Grauman\'s Chinese Theater',
        isSaved: false,
        coordinate: {
          latitude: 34.102378,
          longitude: -118.340242,
          latitudeDelta: 23,
          longitudeDelta: -18,
        },
        photoReference: 'hijklmn',
      },
      savedMarkers: [
        {
          name: 'Hollywood Bowl',
          isSaved: true,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
            latitudeDelta: 5,
            longitudeDelta: -15,
          },
          photoReference: 'abcdefg',
        }
      ],
      currentRegion: INITIAL_REGION,
      isPreviewCardOpen: false,
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
            latitudeDelta: 23,
            longitudeDelta: -18,
          },
          photoReference: 'hijklmn',
        }
      })
    ).toEqual(
      {
        currentMode: 'search',
        selectedMarker: {
          name: 'Grauman\'s Chinese Theater',
          isSaved: true,
          coordinate: {
            latitude: 34.102378,
            longitude: -118.340242,
            latitudeDelta: 23,
            longitudeDelta: -18,
          },
          photoReference: 'hijklmn',
        },
        savedMarkers: [
          {
            name: 'Hollywood Bowl',
            isSaved: true,
            coordinate: {
              latitude: 34.112562,
              longitude: -118.339106,
              latitudeDelta: 5,
              longitudeDelta: -15,
            },
            photoReference: 'abcdefg',
          },
          {
            name: 'Grauman\'s Chinese Theater',
            isSaved: true,
            coordinate: {
              latitude: 34.102378,
              longitude: -118.340242,
              latitudeDelta: 23,
              longitudeDelta: -18,
            },
            photoReference: 'hijklmn',
          }
        ],
        currentRegion: INITIAL_REGION,
        isPreviewCardOpen: false,
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
        currentMode: 'search',
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: {
          latitude: 12.345,
          longitude: -678.901,
          latitudeDelta: 0.9876,
          longitudeDelta: 0.5432,
        },
        isPreviewCardOpen: false,
      }
    );
  });

  it('should handle SET_REGION for existing state', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
        photoReference: 'abcdefg',
      },
      savedMarkers: [],
      currentRegion: {
        latitude: 34.112562,
        longitude: -118.339106,
        latitudeDelta: 5,
        longitudeDelta: -15,
      },
      isPreviewCardOpen: false,
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
        currentMode: 'search',
        selectedMarker: {
          name: 'Hollywood Bowl',
          isSaved: false,
          coordinate: {
            latitude: 34.112562,
            longitude: -118.339106,
            latitudeDelta: 5,
            longitudeDelta: -15,
          },
          photoReference: 'abcdefg',
        },
        savedMarkers: [],
        currentRegion: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 0.9876,
          longitudeDelta: 0.5432,
        },
        isPreviewCardOpen: false,
      }
    );
  });

  it('should handle SHOW_PREVIEW_CARD', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: null,
      savedMarkers: [],
      currentRegion: INITIAL_REGION,
      isPreviewCardOpen: false,
    };

    expect(
      reducer(state, {
        type: types.SHOW_PREVIEW_CARD,
      })
    ).toEqual(
      {
        currentMode: 'search',
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: INITIAL_REGION,
        isPreviewCardOpen: true,
      }
    );
  });

  it('should handle HIDE_PREVIEW_CARD', () => {
    const state = {
      currentMode: 'search',
      selectedMarker: null,
      savedMarkers: [],
      currentRegion: INITIAL_REGION,
      isPreviewCardOpen: true,
    };

    expect(
      reducer(state, {
        type: types.HIDE_PREVIEW_CARD,
      })
    ).toEqual(
      {
        currentMode: 'search',
        selectedMarker: null,
        savedMarkers: [],
        currentRegion: INITIAL_REGION,
        isPreviewCardOpen: false,
      }
    );
  });
});
