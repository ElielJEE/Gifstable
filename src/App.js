import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { GifsContextProvider } from './components/Context/GifsContext';
import NavBar from './components/NavBar';
import Categories from './components/Categories';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifsContextProvider>
          <NavBar />
          <div className='app-item'>
            <div className='app-categorie'>
              <Categories />
            </div>
            <Routes />
          </div>
        </GifsContextProvider>
      </section>
    </div>
  );
}
