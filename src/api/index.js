import axios from "axios";
import { isLoading, getGifs } from '../actions/index';


export const getUsersThunk = (val) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    const result = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=qkfqx8rOcdEPUvsMKYYxxUl8I083s5E4&q=${val}&limit=25&offset=0&rating=g&lang=en`
    );

    dispatch(getGifs(result.data.data));
    dispatch(isLoading(false));
  };
};
