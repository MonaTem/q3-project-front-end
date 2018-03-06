import React, { Component } from 'react';
// eslint-disable-next-line
import { Link, Redirect, Switch, Route } from 'react-router-dom';
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

      axios.get('/cards')
          .then(res => {
           const fetchedCards = [];
              for (let key in res.data) {
                  fetchedCards.push({
                      ...res.data[key],
                      id: key
                  });
              //console.log("this is what we fetched " + fetchedCards);
              }

              this.setState({loading: false, card: fetchedCards});
          })
          .catch(err => {
              this.setState({loading: false});
          });
   }

   cardSelectedHandler = ( card ) => {
        // this.props.history.push({pathname: '/Card/' + id});
        // this.props.history.push( '/Card/' + card.id );

        card = ( card )  => {
                return (
                          <div>
                            <Card
                               key={card.id}
                               cardname={card.cardname}
                               card_image_url={card.card_image_url}
                               cardinfo={card.cardinfo}/>
                           </div>
                        );
          };

    }

    render () {
        let cards = <h1>Esoteric Interpretations of Tarot Cards</h1>

         cards =  this.state.card.map(card => {
                    return (
                      <div>
                        <Cardline
                           key={card.id}
                           cardname={card.cardname}
                           card_image_url={card.card_image_url}
                           clicked={() => this.cardSelectedHandler( card )}/>
                       </div>
                    );
                  });

       return (
              <div>
                <h1>Esoteric Interpretations of Tarot Cards</h1>
                      {cards}
              </div>
       );
    }
}

export default Cards;
