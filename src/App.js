import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import { GifsContextProvider } from './components/Context/GifsContext';
import Search from './components/Search';
import Categories from './components/Categories';
import { Link } from 'wouter';

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifsContextProvider>
          <nav className='navbar-container'>
            <div className='navbar-items'>
              <Link to='/' className='navbar__item'>
                Log in
              </Link>
              <Link to='/' className='navbar__item'>
                Sing up
              </Link>
            </div>
          </nav>
          <header className='logo-container'>
            <h1 className='logo-name'>Gifstable</h1>
          </header>
          <Search />
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
