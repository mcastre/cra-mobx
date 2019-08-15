import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

const App = ({ isLoading, errorMessage, verifyAddress, setUserData }) => (
  <div>
    <h1>hello MobX</h1>
    <input type='text' onChange={str => setUserData(str)} />
    <button type='button' onClick={() => verifyAddress()}>
      Submit
    </button>
    {isLoading ? <p>Loading...</p> : null}
    {errorMessage ? <p>{errorMessage}</p> : null}
  </div>
);

App.propTypes = {
  verifyAddress: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default inject(({ store }) => {
  const { user, ui } = store;

  return {
    verifyAddress: user.verifyAddress,
    setUserData: user.setUserData,
    isLoading: ui.uiState.isLoading,
    errorMessage: ui.uiState.errorMessage
  };
})(observer(App));
