import React, { useState, useEffect } from 'react';
import { List, Spin } from 'antd';
import './productListing.scss';

import InfiniteScroll from 'react-infinite-scroller';
import { searchProducts } from '../../api/';

import ProductTableHeader from '../../common/productTableHeader/productTableHeader';
import ProductLineItem from './productLineItem/productLineItem';
import ProductSearch from './productSearch/productSearch';

function ProductListing() {
    const [searchQuery, setSearchQuery] = useState('shoes');
    const [initialLoading, setInitialLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [totalCount, setTotalCount] = useState(0);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setInitialLoading(true);
        searchProducts(searchQuery).then(res => {
            console.log(res.data);
            setProducts(res.data.products);
            setInitialLoading(false);
        })
    }, []);

    function handleInfiniteOnLoad() {
		if (!initialLoading && !loading && hasMore) {
            handleSearch(searchQuery, offset + 100);
		}

    };

    function handleSearch(query, offset = offset) {
        setSearchQuery(query);
        setLoading(true);
        setInitialLoading(false);

        searchProducts(searchQuery, offset).then(res => {
            handleSearchResults(offset, res.data)
        })  
    };

    function handleSearchResults(offset, response) {
        let updatedProducts = [...products, ...response.products];

        const productCount = response.totalResultSize;

        setOffset(offset);
        setTotalCount(productCount);
        setProducts(updatedProducts);
        setLoading(false);
        setInitialLoading(false);
        setHasMore(updatedProducts.length < productCount);

    }

    function handleSearchSubmit(query) {
        console.log(query);
        setInitialLoading(true);
        setSearchQuery(query);
        searchProducts(query).then(res => {
            setInitialLoading(false);
            setProducts(res.data.products);
            
        })
    }

    function checkProductInCart(id) {
        for(let i=0; i<localStorage.length; i++) {
            if(localStorage.key(i) == id) {
                console.log("yes");
                return true;
            }
        }
        return false
    }
    function update() {
        return
    }
    return (
        <div id="product-listing-wrapper">
            <ProductSearch
                handleSearchSubmit={handleSearchSubmit}
            />
            <div>
                <h2>Results</h2>
                <ProductTableHeader />
                <InfiniteScroll
                    initialLoad={initialLoading}
                    pageStart={0}
                    loadMore={handleInfiniteOnLoad}
                    hasMore={!loading && hasMore}
                    useWindow={true}
                >   {
                        initialLoading ? <Spin /> :
                        <List
                            dataSource={products}
                            locale={{
                                emptyText: 'No Products Available'
                            }}
                            renderItem={item => (
                                <ProductLineItem 
                                    item={item}
                                    productInCartStatus={checkProductInCart(item.id)}
                                    updateCall={update}
                                />
                            )}
                        >
                            {loading && hasMore && (
                                <div id="list-loader-container">
                                    <Spin />
                                </div>
                            )}
                        </List>
                    }
                </InfiniteScroll>
            </div>
        </div>
    )
};

export default ProductListing;