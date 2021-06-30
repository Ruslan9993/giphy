import React, { useEffect } from 'react'
import { Gif } from './components/Gif';
import { useSelector } from 'react-redux';
import { SearchBar } from './components/SearchBar';
import './styles/App.css';

export const App = () => {

  const gifs = useSelector(state => state.gifs.gifs);
  useEffect(() => {
    console.log('useEffect')

    window.localStorage.setItem('gifs', JSON.stringify(gifs))
  }, [])

  console.log('gifs', gifs)
  return (
    <div className='App'>

      <div>
      <SearchBar />
        <div className='App__main'>
          {gifs.map(gif => {
          return <Gif key={gif.id} gif={gif}/>
        })}
        </div>
      </div>
    </div>
  )
}

