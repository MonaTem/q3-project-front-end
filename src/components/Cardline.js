import React from 'react';
import { Link, Route } from 'react-router-dom';
import Card from './Card';
import './Cardline.css';

const Cardline = props => (
    <div className="Cardline card-deck" onClick={props.clicked}>
      <div className="card">
            <Link to='/Card'><img className="card-img-top img-fluid" src={props.card_image_url} height="100" width="50" alt="Tarot card" /></Link>
            <div className="card-footer">
              <p className="card-text">{props.cardname}</p>
              <Route path='/Card' component={Card} />
            </div>
      </div>
    </div>
);

export default Cardline;
