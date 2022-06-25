import React from 'react';
import GifContainer from '../components/GifContainer';
import Loader from '../components/Loader';
import '../Styles/Gif.css'
import UseGifs from '../components/Hooks/UseGifs';

export default function GifList({ params }) {
  const { keyword } = params
  const { loading, gifs } = UseGifs({ keyword })

  return (
    <div className="gif-list-container">
      <h3 className='result-title'>
        Results of '{decodeURI(keyword)}'
      </h3>
      {
        loading ? <Loader /> :
          <GifContainer value={gifs} />
      }
    </div>
  )
}