import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component{


    render(){
        return(
            <div className='Chips'>
                <h1>Chips</h1>
                <h3>Number of packets eaten: </h3>

                <Link exact to='/'>Go Back</Link>
            </div>
        );
    }
}

export default Chips;