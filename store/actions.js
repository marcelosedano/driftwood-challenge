import * as types from './actionTypes';

const selectMarker = placeDetails => {
  const marker = {
    name: placeDetails.name,
    isSaved: false,
    coordinate: {
      latitude: placeDetails.geometry.location.lat,
      longitude: placeDetails.geometry.location.lng,
    }
  };

  return { type: types.SELECT_MARKER, marker };
};

const saveMarker = marker => ({
  type: types.SAVE_MARKER,
  marker: {
    ...marker,
    isSaved: true,
  }
});

export {
  selectMarker,
  saveMarker,
};
