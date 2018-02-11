import * as types from './actionTypes';

const selectMarker = placeDetails => {
  const { location, viewport } = placeDetails.geometry;
  const payload = {
    marker: {
      name: placeDetails.name,
      isSaved: false,
      coordinate: {
        latitude: location.lat,
        longitude: location.lng,
      }
    },
    region: {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: viewport.northeast.lat - viewport.southwest.lat,
      longitudeDelta: viewport.northeast.lng - viewport.southwest.lng,
    }
  };

  return { type: types.SELECT_MARKER, payload };
};

const saveMarker = marker => ({
  type: types.SAVE_MARKER,
  marker: {
    ...marker,
    isSaved: true,
  }
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
