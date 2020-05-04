import React, {useState, useEffect} from 'react';
import { Row, Col, List, Button } from 'antd';

import ProductInfoContainer from '../../../common/productInfoContainer/productInfoContainer';

const ProductLineItem = ({item, productInCartStatus,updateCall}) => {
    const [productInCart, setProductInCart] = useState(productInCartStatus);

    function getAveragePrice(offers) {
        const totalPrice = offers.reduce((total, item) => total + item.price, 0);
        return `€${totalPrice / offers.length}`;
    }

    function getLowestPrice(offers) {
        const offer = offers.reduce((prev, curr) => {
            return prev.price < curr.price ? prev : curr;
        });
        return `€${offer.price}`;
    }

    function removeFromCart(key) {
        window.localStorage.removeItem(key);
        setProductInCart(false);
        updateCall();
    }

    function addToCart(product) {
        window.localStorage.setItem(product.id, JSON.stringify(product));
        setProductInCart(true);
    }

    return (
        <List.Item key={item.id}>
            <Row
                type="flex"
                justify="space-between"
                gutter={32}
                className="product-row"
            >
                <Col span={9}>
                    <ProductInfoContainer product={item} />
                </Col>
                <Col span={3} className="text-center">
                    <p>
                        {getAveragePrice(
                            item.offerData.offers
                        ).replace('.', ',')}
                    </p>
                </Col>
                <Col span={3} className="text-center">
                    <p>
                        {getLowestPrice(
                            item.offerData.offers
                        ).replace('.', ',')}
                    </p>
                </Col>
                <Col span={3} className="text-center">
                    <p>{item.rating / 10}/5</p>
                </Col>
                <Col span={3} className="text-center">
                    <p>{item.offerData.offers.length}</p>
                </Col>
                <Col span={3} className="text-center">
                    {productInCart ? 
                        <Button 
                        onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </Button>:
                        <Button 
                        onClick={() => addToCart(item)}
                        >
                            Add to cart
                        </Button>
                    }   
                </Col>
            </Row>
        </List.Item>
    )
}

export default ProductLineItem;