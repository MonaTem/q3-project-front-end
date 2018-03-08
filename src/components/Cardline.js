import React from 'react';
import './Cardline.css';

const Cardline = props => (

    <div className="card" >
         <a href='/Card' onClick={props.clicked}><img className="card-img-top img-fluid" src={props.card_image_url} height="100" width="50" alt="Tarot card" /></a>
         <div className="card-footer">
            <p className="card-text">{props.cardname}</p>
        </div>
    </div>
);

export default Cardline;
