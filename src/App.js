import React, { Component } from 'react';
import './App.css';
import TarotCards from './components/TarotCards';
import TarotCard from './components/TarotCard';
import axios from './axios-cards';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedCardId: null,
      Data: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleReturnClick = this.handleReturnClick.bind(this);
  }

  componentDidMount() {

      axios.get('/cards')
          .then(res => {
           const fetchedCards = [];
              for (let key in res.data) {
                  fetchedCards.push({
                      ...res.data[key],
                      id: key
                  });
              }
              this.setState({loading: false, Data: fetchedCards});
              console.log('Data is ' + Object.entries(this.state.Data[0]));
              })
              .catch(err => {
                  this.setState({loading: false});
          })
 }

  handleClick = (id) => {
    this.setState({clickedCardId: id});
  }

  handleReturnClick = () => {
    this.setState({clickedCardId: null});
  }

  render = () => {

    // let selectedCards = this.state.Data.filter(card => card.id === this.state.clickedCardId)
    if (this.state.clickedCardId) {
       var idx = parseInt(this.state.clickedCardID, 10) - 1;
       var selectedCard = this.state.Data[idx];

       console.log("clickedCardId " + this.state.clickedCardId);
       console.log("selectedCard  "  + selectedCard);
       console.log("Data " + Object.entries(this.state.Data));
       console.log("idx " + idx);
    }

    return (
      <React.Fragment>
        {this.state.clickedCardId === null ?
          <TarotCards handleClick={this.handleClick} data={this.state.Data} /> :
          <TarotCard
            card={selectedCard} handleReturnClick={this.handleReturnClick}
          />
        }
        {/* <Card id={3} />
        <Cards /> */}
      </React.Fragment>
    );
  }
}


export default App;
