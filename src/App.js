
import React, { Component } from 'react';

import CardList from './CardList'
import Form from './Form'

import logo from './logo.svg';
import './App.css';

class App extends React.Component{

    state ={
        cards: []
    } 
	
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default App;
