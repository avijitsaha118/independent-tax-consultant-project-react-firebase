import React from 'react';

const Feature = ({feature}) => {
    const {name, description, img} = feature;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>

<div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
            </div>
            
        </div>
    );
};

export default Feature;