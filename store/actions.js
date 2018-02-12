import * as types from './actionTypes';

const selectMarker = marker => ({
  type: types.SELECT_MARKER,
  payload: {
    marker,
    region: marker.coordinate,
  },
});

const saveMarker = marker => ({
  type: types.SAVE_MARKER,
  marker: {
    ...marker,
    isSaved: true,
  },
});

const setRegion = region => ({
  type: types.SET_REGION,
  region,
});

export {
  selectMarker,
  saveMarker,
  setRegion,
};
