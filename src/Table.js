import React from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

class Table extends React.Component {
    generateID () {
        return Math.round(Math.random() * 100000);
    }
    render () {
        const rows = [];
        const products = this.props.products;
        let currentProductCategory;
        let filterText = this.props.filterText;
        const inStock = this.props.inStockOnly;

        products.forEach((product) => {
            let row;
           
            if (product.name.indexOf(filterText) === -1) {
                return;
            }

            if (inStock) {
                if (product.stocked !== inStock) {
                    return;
                }
            }
                                   
            if (product.category !== currentProductCategory) {
                row = <ProductCategory 
                            key={this.generateID()}
                            product={product} />;
                rows.push(row);
            }

            row = <ProductRow 
                        key={this.generateID()}
                        product={product} />;
            rows.push(row);
            currentProductCategory = product.category;          
        });

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default Table