import React from 'react';
import Card from './Card';
import './Cardline.css';

const Cardline = props => (

    <div className="card" onClick={props.clicked}>
         <a href='/Card'><img className="card-img-top img-fluid" src={props.card_image_url} height="100" width="50" alt="Tarot card" /></a>
         <div className="card-footer">
            <p className="card-text">{props.cardname}</p>
        </div>
    </div>
);

export default Cardline;
