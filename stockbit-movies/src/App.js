import React from 'react';
import { Provider } from 'react-redux';

import Routes from './Routes/Routes';
import { store } from './Redux/store';


const App = () => {
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  );
};

export default App;