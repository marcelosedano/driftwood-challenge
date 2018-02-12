import { GOOGLE_API_KEY } from '../constants';

const getPlaceImageURI = photoReference => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${photoReference}&key=${GOOGLE_API_KEY}`
};

const createMarker = placeDetails => {
  const { location, viewport } = placeDetails.geometry;
  const photoReference = placeDetails.photos.length && placeDetails.photos[0].photo_reference || '';

  return {
    name: placeDetails.name,
    address: placeDetails.formatted_address,
    phoneNumber: placeDetails.formatted_phone_number,
    isSaved: false,
    coordinate: {
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: viewport.northeast.lat - viewport.southwest.lat,
      longitudeDelta: viewport.northeast.lng - viewport.southwest.lng,
    },
    photoReference,
  };
};

export {
  getPlaceImageURI,
  createMarker,
};
