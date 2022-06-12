import React from 'react';
import '../../Styles/UseInput.css'

export default function UseInput({ type, id, className, name, placeHolder, func }) {
  return (
    <input
      type={type}
      id={id}
      className={className}
      name={name}
      placeholder={placeHolder}
      onChange={func}
    />
  )
}