import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const {id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
         navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt='' />
            <h2>
                {name}
            </h2>
            <p style={{fontSize:"30px"}}>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-success'>Book Now</button>
        </div>
    );
};

export default Service;