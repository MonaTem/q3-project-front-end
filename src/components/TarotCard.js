import React from 'react';
import {Card, CardTitle, CardImg, CardBody, CardText} from 'reactstrap';
import './TarotCardline.css';

const TarotCard = ({card, handleReturnClick}) => {
  return (<React.Fragment>
    <div>
      <Card>
        <CardTitle>Esoteric Interpretation of {card.cardname}</CardTitle>
           <CardImg top img-fluid src={card.card_image_url} height="300" width="150" alt="Tarot card"/>
        <CardBody>
          <CardText>{card.cardinfo}</CardText>
        </CardBody>
      </Card>
    </div>

  </React.Fragment>);
}

export default TarotCard;
