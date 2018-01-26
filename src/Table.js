import React from 'react';
import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

class Table extends React.Component {
    render () {
        const rows = [];
        const products = this.props.products;
        let currentProductCategory;
        let filterText = this.props.filterText;
        const inStock = this.props.inStockOnly;

        products.forEach((product, index) => {
            let row;

            if ((product.name.indexOf(filterText) === -1) || (inStock && !product.stocked)) {
                return;
            }
                                   
            if (product.category !== currentProductCategory) {
                row = <ProductCategory 
                            key={product.category + index}
                            product={product} />;
                rows.push(row);
            }

            row = <ProductRow 
                        key={product.category + product.name}
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