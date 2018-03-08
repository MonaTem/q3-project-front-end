import { Component } from 'react';
import axios from '../axios-cards';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        card: []

    };
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
              this.setState({loading: false, card: fetchedCards});
              })
              .catch(err => {
                  this.setState({loading: false});
              });
          }
 }

export default Data;
