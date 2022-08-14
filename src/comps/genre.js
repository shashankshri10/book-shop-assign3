import React, { Component } from 'react';
import axios from 'axios'


class GenreCards extends Component {
    constructor(props){
        super(props); 
        this.state=[{}]; 
    }
    render() {
        return (
            <div>
                <h1>Genre Cards</h1>
            </div>
        );
    }
}

export default GenreCards;