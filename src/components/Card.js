import React from 'react';

import './Cardline.css';


const Card = ({card, handleReturnClick}) => {
  return (
    <React.Fragment>
      <div className="card">
              <h1 class="card-title">Esoteric Interpretation of {card.cardname}</h1>
            <img className="card-img-top img-fluid" src={card.card_image_url} height="300" width="150" alt="Tarot card" />
              <div class="card-body">
              <p class="card-text">{card.cardinfo}</p>
              </div>
      </div>

    </React.Fragment>
  );
}

export default Card;
