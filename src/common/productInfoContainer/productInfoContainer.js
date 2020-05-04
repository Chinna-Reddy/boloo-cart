import React from 'react';

import './productInfoContainer.scss';

function ProductInfoContainer(props) {
    return(
        <div className="product-info-container">
            {
            props.product.images ?
                <img src={props.product.images[0].url} /> 
                : null
            }
            <div>
				<p className="product-title">{props.product.title}</p>
				<p>EAN: {props.product.ean}</p>
            </div>
        </div>
    )
}

export default ProductInfoContainer;