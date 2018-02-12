import * as types from './actionTypes';

export const DEFAULT_REGION = {
  latitude: 34.109520,
  longitude: -118.330652,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const initialState = {
  selectedMarker: null,
  savedMarkers: [],
  currentRegion: DEFAULT_REGION,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_MARKER:
    console.log('SELECT_MARKER', action.payload.marker);
      return {
        ...state,
        selectedMarker: action.payload.marker,
        currentRegion: action.payload.region,
      };
    case types.SAVE_MARKER:
      console.log('SAVE_MARKER', action.marker);
      return {
        ...state,
        selectedMarker: null,
        savedMarkers: [ ...state.savedMarkers, action.marker ],
      };
    case types.SET_REGION:
      console.log('SET_REGION', action.region);
      return {
        ...state,
        currentRegion: action.region,
      };
    default:
      return state;
  }
};

export default reducer;
