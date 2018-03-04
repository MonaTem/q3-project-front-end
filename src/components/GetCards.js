import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, Link } from 'react-router-dom';
import axios from '../axios-cards';
import Cards from './Cards';

class GetCards extends Component {
    state = {
        card: [],
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
                // console.log(card);
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                {this.state.card.map(order => (
                    <Card
                        key={card.id}
                        cardname={card.cardname}
                        card_image_url={card.card_image_url} />
                ))}
            </div>
        );
    }
}

export default GetCards;
