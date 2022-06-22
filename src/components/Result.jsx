import React from 'react';

export default function Result({ results }) {
  return (
    <div className="result-container">
      <span className="result-item">
        {results}
      </span>
    </div>
  )
}