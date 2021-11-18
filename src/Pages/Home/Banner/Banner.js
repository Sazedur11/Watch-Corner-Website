import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HB5bvvg/w1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Smart watch</h3>
                        <p>Lorem Ipsum is not simply random text.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HB5bvvg/w1.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Digital watch</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/HB5bvvg/w1.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Luxary Watch</h3>
                        <p>Lorem Ipsum is not simply random text.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;