import React from 'react';
import '../Styles/Gif.css'
import { Link } from 'wouter';

export default function Gif({ id, url, title }) {
  return (
    <Link to={`/onegif/${id}`}>
      <div className="gif">
        <div className="gif-canvas">
          <img className='gif-img' src={url} alt={title} title={title} />
        </div>
        <span className="gif-title">
            {title}
        </span>
      </div>
    </Link>
  )
}