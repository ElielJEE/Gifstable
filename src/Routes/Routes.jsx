import React from 'react';
import { Route, Switch, Router } from 'wouter'
import GifList from '../Pages/GifList';
import OneGif from '../Pages/OneGif';
import TGifs from '../Pages/TGifs';

export default function Routes() {
  return (
    <Router>
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