import React, { Component } from 'react';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        }
    }
    buy() {
        this.setState((data) => ({
            qty: data.qty + 1
        }));

        this.props.showTotal(this.props.price);
    }

    sell() {
        this.setState((data) => ({
            qty: data.qty - 1
        }));
        this.props.showTotal(this.props.price)
    }


    show() {
        this.props.showFruits(this.props.name);
    }

    render() {

        return (

            <div>
                <table>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.state.qty}</td>
                        <td>${this.props.price}</td>
                    </tr>
                </table>
                <button onClick={this.buy.bind(this)}> Buy </button>
                <button onClick={this.sell.bind(this)}> Sell </button> <br />

            </div>

        );

    }
}

export default Products;