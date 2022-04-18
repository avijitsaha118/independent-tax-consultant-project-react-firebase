import React from 'react';
import errorImage from '../../../Images/Others/404.jpeg';
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>404 NOT FOUND</h2>
            <img src={errorImage} alt='pic'></img>

        </div>
    );
};

export default NotFound;