import React from 'react';
import { Link } from 'wouter';
import '../Styles/Categories.css'

export default function CategoriesItem({ keyword, title }) {
  return (
    <Link to={`/gif/${keyword}`}>
      <div className="categories-item">
        <span className="categories-item__title">
          {title}
        </span>
      </div>
    </Link>
  )
}