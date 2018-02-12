import React from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';

import store from './store';
import * as actions from './store/actions';

import App from './components/App';

const mapStateToProps = state => ({
  currentRegion: state.currentRegion,
  selectedMarker: state.selectedMarker,
  savedMarkers: state.savedMarkers,
  shouldShowPreviewCard: state.shouldShowPreviewCard,
});
const mapDispatchToProps = {
  setRegion: actions.setRegion,
  selectMarker: actions.selectMarker,
  deselectMarker: actions.deselectMarker,
  saveMarker: actions.saveMarker,
  showPreviewCard: actions.showPreviewCard,
  hidePreviewCard: actions.hidePreviewCard,
};

const withRedux = connect(mapStateToProps, mapDispatchToProps);
const withProvider = Component => () => (
  <Provider store={store}>
    <Component />
  </Provider>
);

export default compose(
  withProvider,
  withRedux,
)(App);
