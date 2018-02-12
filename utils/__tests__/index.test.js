import * as utils from '../index';
import { GOOGLE_API_KEY } from '../../constants';

describe('Utils', () => {
  describe('getPlaceImageURI', () => {
    it('should take a photo reference and return the formatted image uri', () => {
      const photoReference = '';
      const expectedURI = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${photoReference}&key=${GOOGLE_API_KEY}`;

      expect(utils.getPlaceImageURI(photoReference)).toEqual(expectedURI);
    });
  });

  describe('createMarker', () => {
    it('should take a Google Places details response and return a marker object', () => {
      const placeDetails = {
        name: 'Hollywood Bowl',
        geometry: {
          location: {
            lat: 34.112562,
            lng: -118.339106
          },
          viewport: {
            northeast: {
              lat: 20,
              lng: -25
            },
            southwest: {
              lat: 15,
              lng: -10
            },
          }
        },
        photos: [
          { photo_reference: 'abcdefg' },
          { photo_reference: 'hijklmn' },
        ],
      };
      const marker = {
        name: 'Hollywood Bowl',
        isSaved: false,
        coordinate: {
          latitude: 34.112562,
          longitude: -118.339106,
          latitudeDelta: 5,
          longitudeDelta: -15,
        },
        photoReference: 'abcdefg',
      };

      expect(utils.createMarker(placeDetails)).toEqual(marker);
    });
  });
});
