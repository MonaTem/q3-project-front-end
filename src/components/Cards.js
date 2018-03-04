import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';
import GetCards from 'GetCards';


class Cards extends Component {
  constructor(props) {
  super(props);
  this.state = {
    card: ''
  }
  // this.handleClick = this.handleClick.bind(this);
                      }
/*
handleClick() {
  let newState = {};
  /*if (this.state.greeting === 'Hello') {
    newState = {
      greeting: 'Hola', name: 'Dolores'
    }
  } else {
    newState = {
      greeting: 'Hello', name: 'Dolly'
    }
  }
  this.setState( newState );
}
*/

    }

    render () {
        return (
            <div className="Cards">

         <h1>All Cards</h1>
         <ul>
           <ul>
             <Cards
                        key={card.id}
                        cardname={card.cardname}
                        img={card.src}
                      {/*clicked={() => this.cardSelectedHandler( post.id )} */ }
                        />
          )}
      </ul>
    )
         </ul>

              <Switch>
                <Redirect from="/" to="/Cards" /> */
                <Route exact path='/Cards' component={Cards} />
                <Route exact path='/' component={Cards} />
                <Route path='/Card' component={Card} />
                <Route render={() => <h1>Not found</h1>}/>

              </Switch>
          </div>
        );
    }
}

export default Cards;
