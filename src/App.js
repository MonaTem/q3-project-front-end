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
              {/* <Redirect exact from='/' to="/Cards" /> */}
              <Route exact path='/' component={Cards} />
              <Route exact path='/Cards' component={Cards} />
              <Route exact path='/Card' component={Card} />
              <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </Cards>
      </div>
    );
  }
}

export default App;
