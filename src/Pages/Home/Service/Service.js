import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { name, description } = service;
    return (
        <div className="service pb-3">
            <p className="px-3">{description}</p>
            <h5>Name: {name}</h5>
        </div>
    );
};

export default Service;