export default function TrendingGif() {
  const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=ttnlgHHGOtDiAUjzJB3oJJwhOzbuGeQ6&limit=25&rating=r`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gifs = data.map(image => {
        const { images, title, id } = image
        const { url } = image.images.original
        return { images, title, id, url }
      })
      return gifs
    })
}