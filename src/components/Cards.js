import React, { Component } from 'react';
// eslint-disable-next-line
import { Link, Redirect, Switch } from 'react-router-dom';
// eslint-disable-next-line
import Card from './Card';
import axios from '../axios-cards';
import Cardline from './Cardline';
import './Cardline.css';

class Cards extends Component {
  state = {
      loading: true,
      card: []
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
          })
          .catch(err => {
              this.setState({loading: false});
          });
  }

    render () {

        return (
            <div className="Cards">
             <h1>Esoteric Interpretations of Tarot Cards</h1>
             {this.state.card.map(order => (
                 <Cardline
                     key={this.state.card.id}
                     cardname={this.state.card.cardname}
                     card_image_url={this.state.card.card_image_url} />
             ))}
             <Switch>
             <Redirect from="/" to="/Cards" />
             </Switch>
          </div>
        );
    }
}

export default Cards;
