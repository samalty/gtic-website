import React, { useState } from 'react';
import './styles/CaseStudies.scss';
import { CaseStudiesData } from './data/CaseStudiesData';

function CaseStudies() {
    const [x, setX] = useState(0);
    const handleLeft = () => {
        if (x === 0) {
        setX(-100 * (CaseStudiesData.length-1));
            } else setX(x + 100);
    };
    const handleRight = () => {
        if (x === -100 * (CaseStudiesData.length-1)) {
            setX(0);
        } else setX(x - 100);
    };
    return(
        <div className="carousel-container">
            <div className="carousel">
                {CaseStudiesData.map((item, index) => {
                    return (
                        <div className="card" key={index} style={{transform:`translateX(${x}%)`}}>
                            <div className="inner-card">
                                <div className="card-header">
                                    <div>
                                        <i class="fas fa-hard-hat"></i>
                                        <p className="card-header-text">Industry:</p>
                                        <p className="card-header-text">{item.industry}</p>
                                    </div>
                                    <div>
                                        <i class="fas fa-pound-sign"></i>
                                        <p className="card-header-text">Turnover:</p>
                                        <p className="card-header-text">{item.turnover}</p>
                                    </div>
                                    <div>
                                        <i class="fas fa-users"></i>
                                        <p className="card-header-text">Employees:</p>
                                        <p className="card-header-text">{item.employees}</p>
                                    </div>
                                </div>
                                <div className="card-detail">
                                    <h3><b>Background</b></h3>
                                    <p>{item.background}</p>
                                    <h3><b>How we helped</b></h3>
                                    <p>{item.action}</p>
                                    <h3><b>Result</b></h3>
                                    <p>{item.result}</p>
                                </div>
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

export default CaseStudies;