import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';

class Home extends Component {
    state = {

    }

    render () {
        return (
            <div className="Cards">

         <h1>Let us tell you about our coffees.</h1>
<ul>
  <li><Link to='/coffee/peruvian'>Peruvian</Link></li>
  <li><Link to='/coffee/kona'>Kona</Link></li>
</ul>


            </div>
        );
    }
}

export default Home;
