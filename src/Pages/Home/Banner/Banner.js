import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner01.jpg'
import banner2 from '../../../Images/Banner/banner02.jpg'
import banner3 from '../../../Images/Banner/banner03.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Good Consultancy puts you one step ahead</h3>
                    <p>Tax planning is a very important part for you or your company.</p>
             
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>My analysis make your business tax management hasssle free.</h3>
                    <p>Perfect analysis save your company from future audit. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-dark'>My experienced suggestions make everything easy about Taxes. </h3>
                    <p>
                    Your income statement or company turnover assessment analysis help you to make a batter tax payer.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;