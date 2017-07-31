import React, { Component } from 'react';
import axios from 'axios';


export default class Form extends React.Component{
    state = { userName: '' }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        
        fetch('http://chelapi.jvaldivia.org/api/v1/beer', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
             .then(resp => {
                 console.log(resp.data)
                 
                 this.props.onSubmit(resp.data);
             })
             .catch(res => {
                if(res instanceof Error) {
                console.log(res.message);
                } else {
                console.log(res.data);
                }
            });
    }

	render(){
        return(
            <form onSubmit={this.handleSubmit}>
                {/*<input type="text" 
                    value={this.state.userName}
                    onChange={(event) => this.setState({userName: event.target.value})}
                    placeholder="Github username"/>*/}
                <button type="submit">Mostrar cervezas</button>
            </form>
        );
    }
}