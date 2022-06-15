import React, { useState, useEffect, useContext } from 'react';
import GifContainer from '../components/GifContainer';
import SelectedGif from '../Services/SelectedGif';
import UseLoading from '../components/Hooks/UseLoading';
import Loader from '../components/Loader';
import { Context } from '../components/Context/StaticContext';

export default function OneGif({ params }) {
  const [gif, setGif] = useState([])
  const { id } = params
  const { loading, setLoading } = UseLoading();
  const context = useContext(Context);

  console.log(context);

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