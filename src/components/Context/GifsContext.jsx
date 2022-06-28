import React, { useState } from 'react';

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([])

  return <GifsContext.Provider value={
    {
      gifs,
      setGifs
    }
  }
  >
    {children}
  </GifsContext.Provider>
}

export const GifsContext = React.createContext({

})