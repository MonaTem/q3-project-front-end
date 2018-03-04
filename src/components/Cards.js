import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';
import Card from './Card';
import axios from '../axios-cards';
import Cardline from './Cardline';

class Cards extends Component {
  state = {
      card: [],
      loading: true
  }
  componentDidMount() {
      axios.get('/Cards')
          .then(res => {
              const fetchedCards = [];
              for (let key in res.data) {
                  fetchedCards.push({
                      ...res.data[key],
                      id: key
                  });
              }
              this.setState({loading: false, card: fetchedCards});
              // console.log(card);
          })
          .catch(err => {
              this.setState({loading: false});
          });
  }

    render () {
        return (
            <div className="Cards">
             <h1>All Cards</h1>
             {this.state.card.map(order => (
                 <Cards
                     key={this.state.card.id}
                     cardname={this.state.card.cardname}
                     card_image_url={this.state.card.card_image_url} />
             ))}

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
