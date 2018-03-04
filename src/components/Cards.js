import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Home extends Component {
    state = {

    }

    render () {
        return (
            <div className="Cards">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/cards/"
                                exact
                                activeClassName="all-cards"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Cards</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/card'

                            }}>Card</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Home;
