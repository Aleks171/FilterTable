import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import FilterTable from './FilterTable';
import {products} from './consts/data';

ReactDOM.render(
    <FilterTable products={products}/>,
    document.getElementById('root')
);

registerServiceWorker();