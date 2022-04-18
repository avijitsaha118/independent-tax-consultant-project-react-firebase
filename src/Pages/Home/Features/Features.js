import React from 'react';
import doctor from '../../../Images/Features/doctor.jpg';
import teacher from '../../../Images/Features/teacher.jpg';
import developer from '../../../Images/Features/developer.jpg';
import Feature from '../Feature/Feature';

const Features = () => {
    const features = [
        { id: 1, name: 'For Doctor', description: 'It is my honourable respect to Doctor, Dentist and Veterinarian. You can complete your tax return complience from me now at a cheap price.', img: doctor },
        { id: 2, name: 'For Teacher', description:'Teaching is a very noble profession that shapes the character, caliber, and future of an individual. My special honor for the people who come from this profession.',  img: teacher },
        { id: 3, name: 'For Web Developer', description:'Hey, Web or Software developer! You can Log in with your GitHub account and take special price offer from me to fill your indivitual tax return.', img: developer }
    ]
    return (
        <div className='container'>
                        <h2 className='text-primary text-center mt-3'>Special Features</h2>
                        <p style={{fontSize:"20px"}}>This year I declare a special discount offer on Individual Tax Return for the Doctors, Teachers and Web developers.</p>
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