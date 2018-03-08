import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import Card from './components/Card';
import Data from './data/Data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedCardId: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleReturnClick = this.handleReturnClick.bind(this);
  }

  handleClick(id) {
    this.setState({clickedCardId: id});
  }

  handleReturnClick() {
    this.setState({clickedCardId: null});
  }

  render() {
    let selectedCards = Data.filter(Card => Card.id === this.state.clickedCardId)
    return (
      <React.Fragment>
        {this.state.clickedCardId === null ?
          <Cards handleClick={this.handleClick} data={Data} /> :
          <Card
            Card={selectedCards[0]} handleReturnClick={this.handleReturnClick}
          />
        }
        {/* <Card id={3} />
        <Cards /> */}
      </React.Fragment>
    );
  }
}

export default App;
