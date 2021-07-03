import React from 'react';
// import { store } from './reducers/index';
// import { Provider } from 'react-redux';
import { GiphyApp  } from '../GiphyApp/GiphyApp';


export const App = () => {
  console.log('app')
  return (
    // <Provider store={store}>
      <div>
        <GiphyApp />
      </div>
    // </Provider>
  )
}


