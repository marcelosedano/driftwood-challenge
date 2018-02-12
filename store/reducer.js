import * as types from './actionTypes';
import savedMarkers from '../static/preloadedMarkers';

export const INITIAL_REGION = {
  latitude: 34.109520,
  longitude: -118.330652,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const initialState = {
  currentMode: 'search',
  selectedMarker: null,
  // savedMarkers: [], // XXX: Uncomment this line and comment out the next line for tests to pass
  savedMarkers,
  currentRegion: INITIAL_REGION,
  isPreviewCardOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_MODE:
      return {
        ...state,
        currentMode: action.mode,
      };
    case types.SELECT_MARKER:
      return {
        ...state,
        selectedMarker: action.marker,
      };
    case types.DESELECT_MARKER:
      return {
        ...state,
        selectedMarker: null,
      };
    case types.SAVE_MARKER:
      return {
        ...state,
        selectedMarker: action.marker,
        savedMarkers: [ ...state.savedMarkers, action.marker ],
      };
    case types.SET_REGION:
      return {
        ...state,
        currentRegion: action.region,
      };
    case types.SHOW_PREVIEW_CARD:
      return {
        ...state,
        isPreviewCardOpen: true,
      };
    case types.HIDE_PREVIEW_CARD:
      return {
        ...state,
        isPreviewCardOpen: false,
      };
    default:
      return state;
  }
};

export default reducer;
