import React, { Component } from 'react';
// eslint-disable-next-line
// eslint-disable-next-line
import Card from './Card';
import axios from '../axios-cards';
import Cardline from './Cardline';
import './Cardline.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        card: [],
        clicked: false
    };
    this.cardSelectedHandler = this.cardSelectedHandler.bind(this);
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

              this.setState({loading: false, card: fetchedCards, clicked: false});
          })
          .catch(err => {
              this.setState({loading: false});
          });
   }


   // cardSelectedHandler = ( id ) => {
   //
   //   this.setState({clicked: true});
   //
   //   <Card id={ id } clicked={true} />
   //
   // }

    render () {
        let cards = <h1>Esoteric Interpretations of Tarot Cards</h1>

         console.log(this.state.clicked);

         if (this.state.clicked === false) {

         cards =  this.state.card.map(card => {
                    return (
                      <div key={card.id} >
                        <Cardline
                           cardname={card.cardname}
                           card_image_url={card.card_image_url}
                           // onClick={() => this.cardSelectedHandler( this.card.id )}
                           cardinfo={card.cardinfo}
                         />
                       </div>
                     );
          })

       return (
              <div className="card-deck" >
                <h1>Esoteric Interpretations of Tarot Cards</h1>
              {cards}
              </div>
       );
     } else
       return <Card/>
    }
}

export default Cards;
