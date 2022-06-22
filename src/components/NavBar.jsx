import React, { useState } from 'react';
import '../Styles/NavBar.css'
import UseInput from './Hooks/UseInput';
import { FiSearch, FiMenu } from 'react-icons/fi'
import UseSearching from './Hooks/UseSearching';
import Categories from './Categories'

export default function NavBar() {
  const [menu, setMenu] = useState();
  const { handleSubmit, handleChange } = UseSearching();

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="page-logo__container">
          <h1 className="page-logo__name">
            GiphyFrees
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="search-container">
          <div className="btn-container">
            <button className="btn-search">
              <span className="btn-search__title">
                <FiSearch />
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
        <div className="dropdown-menu__container">
          <div
            className="menu-icon__container"
            onClick={() => setMenu((value) => !value)}
          >
            <FiMenu />
          </div>
          <ul className={menu ? "dropdown-menu__list active-dropdown" : "dropdown-menu__list"}>
            <li className="list-item">
              <form onSubmit={handleSubmit} className="search-container__dropdown-menu">
                <div className="btn-container">
                  <button className="btn-search">
                    <span className="btn-search__title">
                      <FiSearch />
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
            </li>
            <li className="list-item">
              <Categories
                className={"categories-container__dropdown-menu"}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}