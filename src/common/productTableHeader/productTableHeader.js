import React from 'react';
import { Row, Col } from 'antd';

import './productTableHeader.scss';

function productTableHeader() {
    return(
        <Row
            type="flex"
            justify="space-between"
            gutter={32}
            className="table-header"
        >
            <Col span={9}>
                <span>Product Information</span>
            </Col>
            <Col span={3} className="text-center">
                <span>Average Price</span>
            </Col>
            <Col span={3} className="text-center">
                <span>Lowest Price</span>
            </Col>
            <Col span={3} className="text-center">
                <span>Average Rating</span>
            </Col>
            <Col span={3} className="text-center">
                <span>Number of sellers</span>
            </Col>
            <Col span={3}>
                <span>Action</span>
            </Col>
        </Row>
    )
}

export default productTableHeader;