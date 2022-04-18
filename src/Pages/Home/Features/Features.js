import React from 'react';
import doctor from '../../../Images/Features/doctor.jpg';
import teacher from '../../../Images/Features/teacher.jpg';
import developer from '../../../Images/Features/developer.jpg';
import Feature from '../Feature/Feature';

const Features = () => {
    const features = [
        { id: 1, name: 'For Doctor', img: doctor },
        { id: 2, name: 'For Teacher', img: teacher },
        { id: 3, name: 'For Web Developer', img: developer }
    ]
    return (
        <div className='container'>
                        <h2 className='text-primary text-center mt-3'>Special Features</h2>
                        <p>This year I declare special discount offer for the Doctors, Teachers and Web developers</p>
            <div className='row'>
                {
                    features.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }

            </div>
        </div>
    );
};

export default Features;