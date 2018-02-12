import * as types from './actionTypes';

const selectMode = mode => ({
  type: types.SELECT_MODE,
  mode,
});

const selectMarker = marker => ({
  type: types.SELECT_MARKER,
  marker,
});

const deselectMarker = () => ({
  type: types.DESELECT_MARKER,
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

const showPreviewCard = () => ({
  type: types.SHOW_PREVIEW_CARD,
});

const hidePreviewCard = () => ({
  type: types.HIDE_PREVIEW_CARD,
});

export {
  selectMode,
  selectMarker,
  deselectMarker,
  saveMarker,
  setRegion,
  showPreviewCard,
  hidePreviewCard,
};
