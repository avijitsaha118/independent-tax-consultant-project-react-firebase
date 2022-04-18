import React from 'react';

const Feature = ({feature}) => {
    const {name, img} = feature;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>

<div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
        </div>
    );
};

export default Feature;