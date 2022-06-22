import React from 'react';
import CategoriesItem from './CategoriesItem'
import CategoriesData from '../Data/CategoriesData.json'
import '../Styles/Categories.css'

export default function Categories({ className }) {
  const categories = CategoriesData.categories;

  return (
    <div className={className}>
      {
        categories.map(({ id, address, name }) =>
          <CategoriesItem
            key={id}
            keyword={address}
            title={name}
          />
        )
      }
    </div>
  )
}