import React from 'react';
import Products from './Products'

class Table extends React.Component {
    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <Products   
                    products={this.props.products}
                    filterText={this.props.filterText}
                    inStockOnly={this.props.inStockOnly} />
            </table>
        );
    }
}

export default Table