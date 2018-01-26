import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FilterTable from './FilterTable';
import PRODUCTS from './PRODUCTS';

ReactDOM.render(
    <FilterTable products={PRODUCTS}/>,
    document.getElementById('root')
);

registerServiceWorker();