import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Cardline" onClick={props.clicked}>
      <div className="CardStuff">
            <div className="CardName">{props.cardname}</div>
            <div className="CardImg">
               <img src={props.card_image_url} />
            </div>
        </div>
    </article>
);

export default post;
