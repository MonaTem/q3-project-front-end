import React from 'react';
// eslint-disable-next-line
// eslint-disable-next-line
import TarotCard from './TarotCard';
import TarotCardline from './TarotCardline';
import './TarotCardline.css';
import { Button, Card, CardDeck } from 'reactstrap';

const TarotCards = ({handleClick, data}) => {
  return (
    <div>
      <h3>Esoteric Interpretations of Tarot Cards</h3>
      <CardDeck>
      {data.map( card =>
        <div key={card.id}>
        <Card>
          <TarotCardline
             cardname={card.cardname}
             card_image_url={card.card_image_url}
           />
         </Card>
         <Button color="primary" size="sm" onClick={handleClick(card.id)}>Select</Button>
         </div>
       )}
        </CardDeck>

    </div>
  );
}

export default TarotCards
