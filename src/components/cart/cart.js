import React, {useState, useEffect} from 'react';
import { List } from 'antd';

import ProductTableHeader from '../../common/productTableHeader/productTableHeader';
import ProductLineItem from '../productListing/productLineItem/productLineItem';
import CompareChart from './compareChart/compareChart';

import './cart.scss'

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        updateCart();
    }, []);

    function updateCart() {
        let cart = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            cart.push(JSON.parse(localStorage.getItem(key)));
        }
        setCartItems(cart);
    }

    function formattedData(data) {
        let formattedData = data.map(product => {
            const totalPrice = product.offerData.offers.reduce((total, item) => total + item.price, 0);
            return [product.ean, totalPrice]
        })
        return [["Product EAN", "Price"], ...formattedData]
    }

    return (
        <div id="cart-wrapper">
            <h2>Compare cart</h2>
            <ProductTableHeader />
            <List
                dataSource={cartItems}
                locale={{
                    emptyText: 'No Products Available'
                }}
                renderItem={item => (
                    <ProductLineItem 
                        item={item}
                        productInCartStatus={true}
                        updateCall={updateCart}
                    />
                )}
            />
            <CompareChart 
                data={formattedData(cartItems)}
            />

        </div>
        
    )
}
export default Cart;