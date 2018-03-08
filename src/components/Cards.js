import React from 'react';
// eslint-disable-next-line
// eslint-disable-next-line
import Card from './Card';
import Cardline from './Cardline';
import './Cardline.css';

const Cards = ({handleClick, data}) => {
  return (
    <div className="card-deck" >
      <h1>Esoteric Interpretations of Tarot Cards</h1>
      {data.map( card =>
        <div className="card" key={card.id} onClick={() => handleClick(card.id)}>
          <Cardline
             cardname={card.cardname}
             card_image_url={card.card_image_url}
             cardinfo={card.cardinfo}
           />
       </div>
      )}
    </div>
  );
}

export default Cards
