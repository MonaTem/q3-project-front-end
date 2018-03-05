import React from 'react';

import './Cardline.css';

const Cardline = props => (
    <div className="Cardline card-deck" onClick={props.clicked}>
      <div className="card">
            <img className="card-img-top img-fluid" src={props.card_image_url} alt="Tarot card" />
            <div className="card-footer">
               <p className="card-text">{props.cardname}</p>
            </div>
      </div>
    </div>
);

export default Cardline;
