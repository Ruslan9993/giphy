import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../reducers/gifsReducer';
// import { debounce } from '../functions/debounce';
import { getUsers } from '../api/index';
import { getGifs  } from '../reducers/gifsReducer';
import '../styles/SearchBar.css';

export const SearchBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    getUsers(value)
      .then(data => dispatch(getGifs(data)))
    dispatch(changeValue(''))
    window.localStorage.getItem('gifs')
  }

  const dispatch = useDispatch()
  const value = useSelector(state => state.gifs.value);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(changeValue(value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const debounced = useCallback(debounce(handleChange, 1000), [])
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        className='input'
        value={value}
        onChange={handleChange}
        placeholder='Search...'
      />
    </form>
  )
}
