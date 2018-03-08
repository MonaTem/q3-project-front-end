
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from '../axios-cards'
import './Cardline.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        card: "",
        id: props.id,
        clicked: false
    };
    // this.cardSelectedHandler = this.cardSelectedHandler.bind(this);
  }


  componentDidMount() {

      axios.get('/Card'), {
             params: {
                 id: this.state.id
             }
          .then(res => {
              const fetchedCard = res.data;
              this.setState({loading: false, card: fetchedCard, id: this.state.id});
           })
          .catch(err => {
              this.setState({loading: false});
          })
     }
  }

   // cardSelectedHandler = ( id ) => {
   //
   //   <Card {id}/>
   //
   // }

    render () {
        let card = <h1>Esoteric Interpretation of {this.state.card.cardname}</h1>

         card =  this.state.card(card => {
                    return (
                      <div key={card.id} className="card">
                        {/* onClick={() => this.cardSelectedHandler( this.card.id )}> */}
                                <h1 class="card-title">Esoterica about {card.cardname}</h1>
                              <a href='/Cardinfo'><img className="card-img-top img-fluid" src={card.card_image_url}  onClick={this.state.clicked} height="300" width="150" alt="Tarot card" /> </a>
                                <div class="card-body">
                                <p class="card-text">{card.cardinfo}</p>
                            </div>
                        </div>
                           );
          })

       return (
              <div className="card" >
                <h1>Esoteric Interpretation of {card.cardname} </h1>
                   {card}
              </div>
       );
    }
}

export default Card;
