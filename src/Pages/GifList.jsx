import React, { useEffect, useState } from 'react';
import getGifs from '../Services/getGifs';
import GifContainer from '../components/GifContainer';
import Loader from '../components/Loader';
import UseLoading from '../components/Hooks/UseLoading';

export default function GifList({ params }) {
  const { keyword } = params
  const [gifs, setGifs] = useState([])
  const { loading, setLoading } = UseLoading();

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword, setLoading]);

  return (
    loading ? <Loader /> :
      <GifContainer value={gifs} />
  )
}