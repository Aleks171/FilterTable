import React from 'react';
import FilterBar from './FilterBar';
import Table from './Table'

class FilterTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filterText: '', 
            inStockOnly: true
        };
        this.updateFilterText = this.updateFilterText.bind(this);
        this.updateStock = this.updateStock.bind(this);
    }

    updateFilterText (e) {
        const value = e.target.value;
        this.setState({
            filterText: value
        });
    }

    updateStock (e) {
        const value = e.target.checked;

        this.setState({
            inStockOnly: value
        });
    }
    
    render () {
        return (
            <div>
                <FilterBar filterText={this.state.filterText}
                            inStock={this.state.inStockOnly}
                            updateOnSearchChange={this.updateFilterText}
                            updateOnStockChange={this.updateStock}
                />
                <Table products={this.props.products}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}
export default FilterTable