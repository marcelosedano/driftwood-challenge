import React from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';

import store from './store';
import * as actions from './store/actions';

import App from './components/App';

const mapStateToProps = state => ({
  selectedMarker: state.selectedMarker,
  savedMarkers: state.savedMarkers,
});
const mapDispatchToProps = {
  selectMarker: actions.selectMarker,
  saveMarker: actions.saveMarker,
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
