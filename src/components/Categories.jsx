import React from 'react';
import CategoriesItem from './CategoriesItem'
import CategoriesData from '../Data/CategoriesData.json'
import Slider from 'react-slick';
import '../Styles/Categories.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const categories = CategoriesData.categories;
  console.log(categories.length)

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 10,
    infinite: true,
    autoplay: true,
    speed: 12000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    variableWidth: true
  }

  return (
    <div className="categories-container">
      <Slider {...settings}>
        {
          categories.map(({ id, address, name }) =>
            <CategoriesItem
              key={id}
              keyword={address}
              title={name}
            />
          )
        }

      </Slider>
    </div>
  )
}