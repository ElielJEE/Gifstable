import React from 'react';
import Gif from './Gif';

export default function GifContainer({ value }) {
  return (
    <div className='gif-container'>
      {
        value.map(({ id, title, url }) =>
          <Gif
            key={id}
            title={title}
            url={url}
            id={id}
          />
        )
      }
    </div>
  )
}