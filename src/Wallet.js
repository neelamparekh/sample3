import React, { Component } from 'react';

class Wallet extends Component {
    render() {
        return (
            <div>
                <h1>My Wallet</h1>
                <h2> Total Cash :  $ {this.props.total}</h2>
            </div>
        );
    }
}

export default Wallet;