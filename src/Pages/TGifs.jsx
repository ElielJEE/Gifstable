import React from 'react';
import GifContainer from '../components/GifContainer';
import Loader from '../components/Loader';
import UseGifs from '../components/Hooks/UseGifs'

export default function TGifs() {
  const { loading, gifs } = UseGifs()

  return (
    <div className="gif-list-container">
      <h3 className='result-title'>Trending</h3>
      {
        loading ? <Loader /> :
          <GifContainer value={gifs} />
      }
    </div>
  )
}