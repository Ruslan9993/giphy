import axios from 'axios';

export const getUsers = async(value = 'lsd') => {
  const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=qkfqx8rOcdEPUvsMKYYxxUl8I083s5E4&q=${value}&limit=25&offset=0&rating=g&lang=en`)

  .then(({data}) => data.data)

  return result;
}