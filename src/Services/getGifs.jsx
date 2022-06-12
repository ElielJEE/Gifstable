const apiKey = 'ttnlgHHGOtDiAUjzJB3oJJwhOzbuGeQ6'

export default function getGifs({ keyword }) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

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