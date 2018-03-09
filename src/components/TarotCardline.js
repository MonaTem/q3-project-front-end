import React from 'react';
import './TarotCardline.css';
import { Card, CardFooter, CardText, CardImg } from 'reactstrap';

const TarotCardline = props => (
  <Card>
    <CardImg href='/Card' onClick={props.clicked} top src={props.card_image_url} height="5%" width="5%" alt="Tarot card"/>
    <CardFooter>
      <CardText>{props.cardname}</CardText>
    </CardFooter>
  </Card>
  );

export default TarotCardline;
