import React, { Component } from 'react';
// eslint-disable-next-line
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Cards from './components/Cards';
// eslint-disable-next-line
import Card from './components/Card';

class App extends Component {
  render () {
    return (
      <div>
        <Cards>
            <Switch>
              <Route path='/' component={Cards} />
              <Route path='/Cards' component={Cards} />
              <Route path='/Card' component={Card} />
              <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </Cards>
      </div>
    );
  }
}

export default App;
