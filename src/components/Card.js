import React from 'react';

import './Cardline.css';

const Card = props => (
    <div className="card" onClick={props.clicked}>
            <h1 class="card-title">Esoteric Interpretation of {props.cardname}</h1>
          <img className="card-img-top img-fluid" src={props.card_image_url} height="300" width="150" alt="Tarot card" />
            <div class="card-body">
            <p class="card-text">{props.cardinfo}</p>
            </div>
    </div>
);

export default Card;
