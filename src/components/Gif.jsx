import React from 'react';
import '../Styles/Gif.css'
import { Link } from 'wouter';

export default function Gif({ id, url, title }) {
  return (
    <Link to={`/onegif/${id}`}>
      <div className="gif">
        <img className='gif-img' src={url} alt={title} title={title} loading='lazy' />
        <span className="gif-title">
          {title}
        </span>
      </div>
    </Link>
  )
}