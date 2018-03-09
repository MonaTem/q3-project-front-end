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
      Data: [],
      ix: 0,
      error: false,
      selectedCard: " "

    }
    console.log("before binds");
    console.log("clickedCardId is " + this.state.clickedCardId);
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
              this.setState({loading: false, Data: fetchedCards, error: false });
              console.log('Data is ' + Object.entries(this.state.Data[0]));
              })
              .catch(err => {
                  this.setState({loading: false, clickedCardID: null, error: true});
          })
 }

  handleClick = (id) => {
    console.log("in handleClick");
    this.setState({clickedCardId: id, ix: (this.state.clickedCardId - 1), selectedCard: this.state.Data[this.state.ix]});
    console.log("clickedCardId is " + this.state.clickedCardId);
  }

  handleReturnClick = () => {
    console.log("in handlereturn");
    this.setState({clickedCardId: null});
  }


  render = () => {

    // let selectedCards = this.state.Data.filter(card => card.id === this.state.clickedCardId)
    if (this.state.clickedCardId) {

       console.log("clickedCardId " + this.state.clickedCardId);
       console.log("selectedCard  "  + this.state.selectedCard);
       console.log("Data " + Object.entries(this.state.Data));
       console.log("ix " + this.state.ix);
    } else console.log("clickedCardId is null so in else");

    return (
      <React.Fragment>
        {this.state.clickedCardId === null ?
          <TarotCards handleClick={this.handleClick} data={this.state.Data} /> :
          <TarotCard
            card={this.state.selectedCard} handleReturnClick={this.handleReturnClick}
          />
        }
        {/* <Card id={3} />
        <Cards /> */}
      </React.Fragment>
    );
  }
}


export default App;
