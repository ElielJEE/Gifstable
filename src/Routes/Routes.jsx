import React from 'react';
import { Route, Switch, Router } from 'wouter'
import Categories from '../components/Categories';
import GifList from '../Pages/GifList';
import NavBar from '../components/NavBar';
import OneGif from '../Pages/OneGif';
import TGifs from '../Pages/TGifs';

export default function Routes() {
  return (
    <Router>
      <NavBar />
      <Categories 
        className={"categories-container categories-menu__fixed"}
      />
      <Switch>
        <Route
          exact path='/'
          component={TGifs}
        />
        <Route
          exact path='/gif/:keyword'
          component={GifList}
        />
        <Route
          exact path='/onegif/:id'
          component={OneGif}
        />
      </Switch>
    </Router>
  )
}