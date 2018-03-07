import React from 'react';

import './Cardline.css';

const Card = props => (
    <div className="Card" onClick={props.clicked}>
      <div className="card">
            <h1 class="card-title">Esoterica about {props.cardname}</h1>
          <img className="card-img-top img-fluid" src={props.card_image_url} height="300" width="150" alt="Tarot card" />
            <div class="card-body">
            <p class="card-text">{props.cardinfo}</p>
            </div>
      </div>
    </div>
);

export default Card;
