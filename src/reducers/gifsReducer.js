import { CHANGE_VALUE, GET_GIFS } from '../actions/index';

const initialState = {
  gifs: [],
  value: '',

}

export const gifsReducer = (state = initialState, action) => {

  switch(action.type) {
    case GET_GIFS:
      return { ...state, gifs: action.payload}
    case CHANGE_VALUE:
        return { ...state, value: action.payload}
    
    default: 
      return { ...state }
  }
}

export const getGifs = payload => {
  return {
    type: GET_GIFS,
    payload
  }
}
export const changeValue = payload => {
  return {
    type: CHANGE_VALUE,
    payload
  }
}