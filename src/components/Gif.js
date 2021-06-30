import React from 'react'
import '../styles/Gif.css';

export const Gif = ({ gif }) => {

  return (
    <div className='Gif'>
      {/* <img src={gif.images.downsized.url} alt='gif' /> */}
      <picture> 
        <source type="image/webp" srcSet={gif.images.downsized.url}/>
        <img src={gif.images.downsized.url} alt='gif' />
      </picture>
    </div>
  )
}
