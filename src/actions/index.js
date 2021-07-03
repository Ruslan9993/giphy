export const GET_GIFS = 'GET_GIFS';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const IS_LOADING = 'IS_LOADING';
export const EMPTY_VALUE = 'EMPTY_VALUE';

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
export const emptyValue = payload => {
  return {
    type: EMPTY_VALUE,
    payload
  }
}