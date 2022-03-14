import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component{


    render(){
        return(
            <div className='Sardines'>
                <h1>Sardines</h1>
                <h3>How would you like Sardinesss</h3>

                <Link exact to='/'>Go Back</Link>
            </div>
        );
    }
}

export default Sardines;