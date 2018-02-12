import * as types from './actionTypes';

export const DEFAULT_REGION = {
  latitude: 34.109520,
  longitude: -118.330652,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
const savedMarkers = [
  {
    address: '3922 Sunset Blvd, Los Angeles, CA 90029, USA',
    coordinate: {
      latitude: 34.0920588,
      latitudeDelta: 0.00269796058300642,
      longitude: -118.2803213,
      longitudeDelta: 0.0026979605829922093,
    },
    isSaved: true,
    name: 'Intelligentsia Coffee Silver Lake Coffeebar',
    phoneNumber: '(323) 663-6173',
    photoReference: 'CmRaAAAA2-4Eb-LsEglL4E-hoex8CjRi1qPXfpoH30JVnrsaU71FfOE5tTta9tIN1dYB9Ufqb0wTB5KpeeXBLT12YtavNnhtoE90tSTHRJ-sybx8bZ7TJ5861YDl8NtbzShq7xpWEhC8QnM6jhe1opAEB7t9-ZUnGhQL7k0W03dSmqobMfPoi06BXsu2nw',
  },
  {
    address: '2927 Sunset Blvd, Los Angeles, CA 90026, USA',
    coordinate: {
      latitude: 34.08358820000001,
      latitudeDelta: 0.0026979605829922093,
      longitude: -118.2736694,
      longitudeDelta: 0.0026979605829922093,
    },
    isSaved: true,
    name: 'Silverlake Ramen',
    phoneNumber: '(323) 660-8100',
    photoReference: 'CmRaAAAAqkB-Icd7Gkz1aBTFR9HaKIjlwvgPCb0UMPtUEvkSUMiMtRKodRjXoQ7eq732WLdWJKyGgzIyJpgrrQ7VgSa5xSJ-ZB1HwTNE6Uy0iLKXOEshgL0i1pxKhYR9TjgNdseeEhCaxRCBmXa84pfDSP3rtqfsGhRktCH-cAT-RQzRK5HYvqgmzFAiew',
  },
  {
    address: '2141 Sunset Blvd, Los Angeles, CA 90026, USA',
    coordinate: {
      latitude: 34.0776643,
      latitudeDelta: 0.00269796058300642,
      longitude: -118.2647904,
      longitudeDelta: 0.0026979605829922093,
    },
    isSaved: true,
    name: 'Mohawk Bend',
    phoneNumber: '(213) 483-2337',
    photoReference: 'CmRaAAAAdyHdo6OumhbiX2gsdYNhiAbu4Nu9PHUROWbgxtWU2qxrSxbkWJwAXAOsUbsA7d44wtvADnXRTjhyd1DBfXU_YfxpCmg9YB1qyFXyhosNDG1k7VD5xI_pbPqcOMlm1EWQEhCXubHsBTZxxw6aq-m_o_LGGhRwGT6xSl72TudpYD3i0qysYU31OQ',
  },
];

const initialState = {
  selectedMarker: null,
  savedMarkers,
  currentRegion: DEFAULT_REGION,
  shouldShowPreviewCard: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_MARKER:
    // console.log('SELECT_MARKER', action.marker);
      return {
        ...state,
        selectedMarker: action.marker,
      };
    case types.DESELECT_MARKER:
      // console.log('DESELECT_MARKER');
      return {
        ...state,
        selectedMarker: null,
      };
    case types.SAVE_MARKER:
      // console.log('SAVE_MARKER', action.marker);
      return {
        ...state,
        selectedMarker: action.marker,
        savedMarkers: [ ...state.savedMarkers, action.marker ],
      };
    case types.SET_REGION:
      // console.log('SET_REGION', action.region);
      return {
        ...state,
        currentRegion: action.region,
      };
    case types.SHOW_PREVIEW_CARD:
      // console.log('SHOW_PREVIEW_CARD');
      return {
        ...state,
        shouldShowPreviewCard: true,
      };
    case types.HIDE_PREVIEW_CARD:
      // console.log('HIDE_PREVIEW_CARD');
      return {
        ...state,
        shouldShowPreviewCard: false,
      };
    default:
      return state;
  }
};

export default reducer;
