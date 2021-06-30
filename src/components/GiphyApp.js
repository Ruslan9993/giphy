import React, { useEffect } from 'react'
import { Gif } from '../components/Gif';
import { Loader } from './Loader'; 
import { useSelector } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import '../styles/App.css';

export const GiphyApp = () => {

  const gifs = useSelector(state => state.gifs.gifs);
  const loading = useSelector(state => state.gifs.loading);

  useEffect(() => {
    console.log('useEffect')

    // window.localStorage.setItem('gifs', JSON.stringify(gifs))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('gifs', gifs)

  // if(loading) {
  //   return (
  //     <div>Loading...</div>
  //   )
  // }

  return (
    <div className='App'>

      <div>
      <SearchBar />
        <div className='App__main'>
          { loading === false ? gifs.map(gif => {
          return <Gif key={gif.id} gif={gif}/>
        }) : (<Loader />)}
        </div>
      </div>
    </div>
  )
}