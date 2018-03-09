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

    let selectedCards = this.state.Data.filter(Card => Card.id === this.state.clickedCardId)
    console.log(this.state.clickedCardId)
    return (
      <React.Fragment>
        {this.state.clickedCardId === null ?
          <TarotCards handleClick={this.handleClick} data={this.state.Data} /> :
          <TarotCard
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
