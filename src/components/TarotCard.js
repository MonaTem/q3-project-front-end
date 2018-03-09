import React, {Component} from 'react';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

import './TarotCardline.css';


class TarotCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      handleReturnClick: props.handleReturnClick
    }
    console.log("card is " + this.state.card);

    this.handleReturnClick = this.state.handleReturnClick.bind(this);
  }

  render = () => {
    return (<React.Fragment>
      <div>
        <Card>
          <CardTitle>Esoteric Interpretation of {this.state.card.cardname}</CardTitle>
          <CardImg top="top" img-fluid="img-fluid" src={this.state.card.card_image_url} height="300" width="150" alt="Tarot card"/>
          <CardBody>
            <CardText>{this.state.card.cardinfo}</CardText>
          </CardBody>
        </Card>
      </div>

    </React.Fragment>);
  }
}

export default TarotCard;
