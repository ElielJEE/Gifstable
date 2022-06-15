import React, { useState, useEffect } from 'react';
import TrendingGif from '../Services/TrendingGif';
import GifContainer from '../components/GifContainer';
import Loader from '../components/Loader';
import UseLoading from '../components/Hooks/UseLoading'

export default function TGifs() {
  const [gifs, setGifs] = useState([])
  const { loading, setLoading } = UseLoading();

  useEffect(() => {
    setLoading(true)
    TrendingGif()
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [setLoading]);

  return (
    <div className="gif-list-container">
      {
        loading ? <Loader /> :
          <GifContainer value={gifs} />
      }
    </div>
  )
}