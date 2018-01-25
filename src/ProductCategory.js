import React from 'react';

class ProductCategory extends React.Component {
    render () {
        const category = this.props.product.category;

        return (
            <tr key={this.props.index}>
                <td>{category}</td>
            </tr>
        );
    }
}

export default ProductCategory