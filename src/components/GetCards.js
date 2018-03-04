import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';
import axios from '../../axios-orders';

class GetCards extends Component {
    state = {
        cards: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/Cards')
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

    render () {
        return (
            <div>
                {this.state.cards.map(order => (
                    <Card
                        key={card.id}
                        cardname={card.cardname}
                        src={require{card.card_image_url}} />
                ))}
            </div>
        );
    }
}

export default GetCards;
