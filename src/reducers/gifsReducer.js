import { CHANGE_VALUE, GET_GIFS, IS_LOADING } from '../actions/index';

const initialState = {
  gifs: [],
  value: '',
  loading: false,

}

export const gifsReducer = (state = initialState, action) => {

  switch(action.type) {
    case GET_GIFS:
      return { ...state, gifs: action.payload}
    case CHANGE_VALUE:
        return { ...state, value: action.payload}
    case IS_LOADING:
          return { ...state, loading: action.payload}    
    
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
export const isLoading = payload => {
  return {
    type: IS_LOADING,
    payload
  }
}