import React from 'react';
import './TarotCardline.css';

const TarotCardline = props => (
  <div className="line">
    <img href='/Card' style={{height: 100,  width: 50}} src={props.card_image_url} alt="Tarot card"/>
  <p className="cardNm">{props.cardname}</p>
  </div>
);

export default TarotCardline;
