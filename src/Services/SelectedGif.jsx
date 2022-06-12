export default function SelectedGif({ id = 'pO4UHglOY2vII' }) {
  const url = `https://api.giphy.com/v1/gifs?api_key=ttnlgHHGOtDiAUjzJB3oJJwhOzbuGeQ6&ids=${id}`

  return fetch(url)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const gif = data.map(img => {
        const { images, title, id } = img
        const { url } = img.images.original
        return { images, title, id, url }
      })
      return gif
    })
}