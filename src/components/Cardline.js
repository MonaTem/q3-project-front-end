import React from 'react';
import { Link, Route } from 'react-router-dom';
import Card from './Card'
import './Cardline.css';

const Cardline = props => (

    <div className="card" onClick={props.clicked}>
         <Link to='/Card'><img className="card-img-top img-fluid" src={props.card_image_url} height="100" width="50" alt="Tarot card" /></Link>
         <div className="card-footer">
            <p className="card-text">{props.cardname}</p>
        </div>
          <Route
            exact path='/Card'
           render={(props) => <Card {...props} extra={props.cardinfo} /> }
         />
    </div>
);

export default Cardline;
