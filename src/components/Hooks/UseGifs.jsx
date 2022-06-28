import { useEffect, useContext } from 'react'
import getGifs from '../../Services/getGifs'
import TrendingGif from '../../Services/TrendingGif'
import UseLoading from '../Hooks/UseLoading'
import { GifsContext } from '../Context/GifsContext'

export default function UseGifs({ keyword } = { keyword: null }) {
  const { loading, setLoading } = UseLoading();
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(() => {
    setLoading(true)
    keyword ? getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      }) : TrendingGif()
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
        })
  }, [keyword, setLoading, setGifs]);

  return { loading, gifs }
}