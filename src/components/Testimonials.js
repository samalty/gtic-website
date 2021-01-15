import React, { useState } from 'react';
import './Testimonials.scss';
import { TestimonialsData } from './TestimonialsData';

function Testimonials() {
    const [x, setX] = useState(0);
    const handleLeft = () => {
        if (x === 0) {
        setX(-100 * (TestimonialsData.length-1));
            } else setX(x + 100);
    };
    const handleRight = () => {
        if (x === -100 * (TestimonialsData.length-1)) {
            setX(0);
        } else setX(x - 100);
    };
    return(
        <div className="carousel-container">
            <div className="carousel">
                {TestimonialsData.map((item, index) => {
                    return (
                        <div className="card" key={index} style={{transform:`translateX(${x}%)`}}>
                            <div className="inner-card">
                                <i className="fas fa-quote-right"></i>
                                <p className="testimonial-text"><i>{item.testimonial}</i></p>
                                <p className="source-text">{item.source}</p>
                            </div>
                        </div>
                    )
                })}
                <button className="carousel-btn left" onClick={handleLeft}><span></span></button>
                <button className="carousel-btn right" onClick={handleRight}><span></span></button>
            </div>
        </div>
    )
}

export default Testimonials;