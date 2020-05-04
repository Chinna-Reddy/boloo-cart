import React from 'react';
import { Input } from 'antd';
import './productSearch.scss';

const { Search } = Input;
const productSearch = ({handleSearchSubmit}) => {
    return (
        <div className="product-search">
            <h2>Search for a product</h2>
            <Search
            placeholder="Enter product name or EAN"
            enterButton="Search"
            size="large"
            onSearch={value => handleSearchSubmit(value)}
            />
        </div>
    )
}

export default productSearch;