import React from 'react';

import './Cardline.css';

const Card = props => (
    <div className="Card" onClick={props.clicked}>
      <div className="card">
        <h1>Esoteric Interpretation of {props.cardname}</h1>
            <img className="card-img-top img-fluid" src={props.card_image_url} height="500" width="200" alt="Tarot card" />
            <div class="card-body">
              <h5 class="card-title">{props.cardname}</h5>
            <p class="card-text">{props.cardinfo}</p>
            </div>
      </div>
    </div>
);

export default Card;
