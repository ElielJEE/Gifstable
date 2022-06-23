import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { GifsContextProvider } from './components/Context/GifsContext';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifsContextProvider>
          <Routes />
        </GifsContextProvider>
      </section>
    </div>
  );
}
