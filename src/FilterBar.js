import React from 'react';

class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleSearchFieldClick = this.handleSearchFieldClick.bind(this);
      }
    handleCheckboxClick () {
        const value = this.input.checked;
        this.props.updateOnStockChange(value);
    }

    handleSearchFieldClick () {
        const value = this.text.value;
        this.props.updateOnSearchChange(value);
    }

    render () {
        const inStock = this.props.inStock;
        return (
            <form>
                <input  type="text" 
                        placeholder="Search..."
                        onChange={this.handleSearchFieldClick}
                        ref={(textToFilter) => this.text = textToFilter}/>
                <p>
                    <input  type="checkbox"
                            onChange={this.handleCheckboxClick}
                            checked={inStock}
                            ref={(input) => this.input = input}/>
                    Show only what in stock
                </p>
            </form>
        );
    }
}

export default FilterBar