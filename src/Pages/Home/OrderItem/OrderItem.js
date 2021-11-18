import React from 'react';

const OrderItem = (props) => {
    const { name, price } = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button>Remove</button>
        </div>
    );
};

export default OrderItem;