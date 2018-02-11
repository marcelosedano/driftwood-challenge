import * as types from './actionTypes';

const initialState = {
  selectedMarker: null,
  savedMarkers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_MARKER:
      console.log(action.marker);
      return {
        ...state,
        selectedMarker: action.marker,
      };
    case types.SAVE_MARKER:
      console.log(action.marker);
      return {
        ...state,
        selectedMarker: null,
        savedMarkers: [ ...state.savedMarkers, action.marker ],
      };
    default:
      return state;
  }
};

export default reducer;
