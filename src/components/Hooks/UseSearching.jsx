import { useState } from "react";
import { useLocation } from 'wouter';

export default function UseSearching() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  
  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/gif/${keyword}`)
  }

  const handleChange = e => {
    setKeyword(e.target.value)
    pushLocation(`/gif/${keyword}`)
  }

  return { handleSubmit, handleChange }
}