import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { Context } from './components/Context/StaticContext';

export default function App() {
  return (
    <Context.Provider value={
      {
        name:'arnold',
        booleanItem: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <Routes />
        </section>
      </div>
    </Context.Provider>
  );
}
