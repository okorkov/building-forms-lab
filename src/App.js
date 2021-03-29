import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
import { createStore } from 'redux';
import manageBand from './reducers/manageBand'
import { Provider } from 'react-redux'

const store = createStore(
  manageBand,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BandsContainer />
        </Provider>
      </div>
    );
  }
};

export default App;
