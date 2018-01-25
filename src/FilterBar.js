import React from 'react';

class FilterBar extends React.Component {
    
    render () {
        const text = this.props.filterText;
        const inStock = this.props.inStock;
        return (
            <form>
                <input type="text" placeholder="Search..."
                        value={text}
                        onChange={this.props.updateOnSearchChange}/><br/>
                <p>
                    <input type="checkbox"
                            onChange={this.props.updateOnStockChange}
                            checked={inStock}/>
                    Show only what in stock
                </p>
                
            </form>
        );
    }
}

export default FilterBar