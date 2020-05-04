import React from 'react';

import {
    Link
} from "react-router-dom";
import './navBar.scss';
import { 
    ShoppingCartOutlined,
    HomeOutlined
 } from '@ant-design/icons';

const navBar = () => {
    return (
        <div id="navbar-wrapper">
            <Link to="/">
                <HomeOutlined
                style={{fontSize:"30px"}}
                />
            </Link>
            <Link to="/cart">
                <ShoppingCartOutlined 
                style={{fontSize:"30px"}}
                />
            </Link>
        </div>
    )
}

export default navBar;