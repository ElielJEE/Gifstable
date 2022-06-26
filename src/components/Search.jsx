import React from 'react';
import '../Styles/NavBar.css'
import UseInput from './Hooks/UseInput';
import UseSearching from './Hooks/UseSearching';

export default function NavBar() {
  const { handleSubmit, handleChange } = UseSearching();

  return (
    <section className='navbar'>
      <div className="navbar-container">
        <form onSubmit={handleSubmit} className="search-container">
          <div className="btn-container">
            <button className="btn-search">
              <span className="btn-search__title">
                Search
              </span>
            </button>
          </div>
          <UseInput
            type={'search'}
            id={'search-id'}
            className={'search-class'}
            name={'q'}
            placeHolder={'Search for gifs...'}
            func={handleChange}
          />
        </form>
      </div>
    </section>
  )
}