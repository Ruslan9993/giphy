import React from 'react';
// import { store } from './reducers/index';
// import { Provider } from 'react-redux';
import { GiphyApp } from './components/GiphyApp';


export const App = () => {
  return (
    // <Provider store={store}>
      <div>
        <GiphyApp />
      </div>
    // </Provider>
  )
}


