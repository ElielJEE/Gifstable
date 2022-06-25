import React from 'react';
import '../Styles/NavBar.css'
import UseInput from './Hooks/UseInput';
import UseSearching from './Hooks/UseSearching';

export default function NavBar() {
  const { handleSubmit, handleChange } = UseSearching();

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <form onSubmit={handleSubmit} className="search-container">
          <div className="btn-container">
            <button className="btn-search">
              <span className="btn-search__title">
                Buscar
              </span>
            </button>
          </div>
          <UseInput
            type={'search'}
            id={'search-id'}
            className={'search-class'}
            name={'q'}
            placeHolder={'Search'}
            func={handleChange}
          />
        </form>
      </div>
    </nav>
  )
}