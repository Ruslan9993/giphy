import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { gifsReducer } from './gifsReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  gifs: gifsReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))