import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gifsReducer } from './gifsReducer';
const rootReducer = combineReducers({
  gifs: gifsReducer
})


export const store = createStore(rootReducer, composeWithDevTools())