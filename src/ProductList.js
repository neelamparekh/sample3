import React, { Component } from 'react';
import Products from './Products';
import Wallet from './Wallet';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '!! Fruits & Vegetable Store !!',
            total: 100
        }

    }
    calculateTotal(price) {

        this.setState((data) => ({
            total: data.total - price
        }));

    }

    render() {
        return (

            <div>
                <h1> {this.state.message}</h1>
                <tr>
                    <th>FRUITS </th>
                    <th>QTY </th>
                    <th> PRICE </th>
                </tr>

                <Products name="Apples" price={1.00}
                    showTotal={this.calculateTotal.bind(this)} />

                <Products name="Mangoes" price={1.50}
                    showTotal={this.calculateTotal.bind(this)} />

                <Products name="Oranges" price={2.00}
                    showTotal={this.calculateTotal.bind(this)} />

                <Products name="Avocadoes" price={3.00}
                    showTotal={this.calculateTotal.bind(this)} />

                <tr><th>VEGETABLES </th>
                    <th>QTY (LB)</th>
                    <th> PRICE / LB </th></tr>

                <Products name="Potatoes" price={2.00}
                    showTotal={this.calculateTotal.bind(this)} />
                <Products name="Onions" price={3.00}
                    showTotal={this.calculateTotal.bind(this)} />
                <Products name="Tomatoes" price={1.50}
                    showTotal={this.calculateTotal.bind(this)} />
                <Products name="Eggplant" price={4.00}
                    showTotal={this.calculateTotal.bind(this)} />

                <Wallet total={this.state.total} />



            </div>
        );
    }
}

export default ProductList;