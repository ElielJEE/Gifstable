import React, { useState, useEffect } from 'react';
import GifContainer from '../components/GifContainer';
import SelectedGif from '../Services/SelectedGif';
import UseLoading from '../components/Hooks/UseLoading';
import Loader from '../components/Loader';

export default function OneGif({ params }) {
  const { id } = params
  const [gif, setGif] = useState([])
  const { loading, setLoading } = UseLoading();

  useEffect(() => {
    setLoading(true)
    SelectedGif({ id })
      .then(gif => {
        setGif(gif)
        setLoading(false)
      })
  }, [id, setLoading]);

  return (
    <div className="gif-list-container">
      {
        loading ? <Loader /> :
          <GifContainer value={gif} />
      }
    </div>
  )
}