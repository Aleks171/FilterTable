import React from 'react';

class ProductRow extends React.Component {
    render () {
        const product = this.props.product;
        const name = product.name;
        const price = product.price;
        
        return (
            <tr key={this.props.index}>
                <td>{name}</td>
                <td>{price}</td>
            </tr> 
        );
    }
}


export default ProductRow