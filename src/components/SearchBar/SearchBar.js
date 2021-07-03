import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../actions/index'
// import { debounce } from '../functions/debounce';
// import { getUsers};
import { getUsersThunk } from '../../api/index';
// import { getGifs  } from '../reducers/gifsReducer';
import '../SearchBar/SearchBar.css';

export const SearchBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getUsersThunk(value))
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

