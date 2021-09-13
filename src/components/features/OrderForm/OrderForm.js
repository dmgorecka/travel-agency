import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options}) => {
    return (
        <Row>
            {pricing.map(opt => (
                <Col md={4} key={opt.id}>
                    <OrderOption {...opt}/>
                </Col>
            ))}
            <Col xs={12}>
                <OrderSummary
                    tripCost={tripCost}
                    options={options}
                />
            </Col>
        </Row>
    );
};

OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,

}

export default OrderForm;