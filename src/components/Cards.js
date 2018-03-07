import React, { Component } from 'react';
// eslint-disable-next-line
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

   // cardSelectedHandler = ( clickedCard ) => {
   //      // this.props.history.push({pathname: '/Card/' + id});
   //      // this.props.history.push( '/Card/' + card.id );
   //      console.log("we are here")
   //      // render () {
   //      //
   //      //    clickedCard = ( clickedCard )  => {
   //      //
        //         return (
   //      //                   <div>
   //      //                     <Card
   //      //                        key={clickedCard.id}
   //      //                        cardname={clickedCard.cardname}
   //      //                        card_image_url={clickedCard.card_image_url}
   //      //                        cardinfo={clickedCard.cardinfo}/>
   //      //                        {/* <Switch> */}
   //      //                          {/* <Route path='/Card' component={Card} /> */}
   //      //                        {/* </Switch> */}
   //      //                    </div>
   //      //                 );
   //      //     };
   //      // }
   //  }

    render () {
        let cards = <h1>Esoteric Interpretations of Tarot Cards</h1>

         cards =  this.state.card.map(card => {
                    return (
                      <div key={card.id}>
                        <Cardline
                           cardname={card.cardname}
                           card_image_url={card.card_image_url}
                           cardinfo={card.cardinfo}
                         />
                           {/* clicked={() => this.cardSelectedHandler( card )}/> */}
                       </div>
                    );
                  });

       return (
              <div className="card-deck" >
                <h1>Esoteric Interpretations of Tarot Cards</h1>
              {cards}
              </div>
       );
    }
}

export default Cards;
