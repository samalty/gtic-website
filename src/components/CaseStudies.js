import React, { Component, useState } from 'react';
import './CaseStudies.scss';
import { CaseStudiesData } from './CaseStudiesData';

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
        <div>
            <h1>Success stories</h1>
            <div className="carousel">
                {CaseStudiesData.map((item, index) => {
                    return (
                        <div className="card" key={index} style={{transform:`translateX(${x}%)`}}>
                            <div className="card-header">
                                <div>
                                    <h3>Industry:</h3>
                                    <h3>{item.industry}</h3>
                                </div>
                                <div>
                                    <h3>Turnover:</h3>
                                    <h3>{item.turnover}</h3>
                                </div>
                                <div>
                                    <h3>Employees:</h3>
                                    <h3>{item.employees}</h3>
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
                    )
                })}
                <button className="left" onClick={handleLeft}>left</button>
                <button className="right" onClick={handleRight}>right</button>
            </div>
        </div>
    )
}

export default CaseStudies;