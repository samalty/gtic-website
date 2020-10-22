import React, { Component } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import './CaseStudies.scss';
import { CaseStudiesData } from './CaseStudiesData';

class CaseStudies extends Component {
    state = {
        items: [CaseStudiesData]
    }
    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '👈' : '👉'
        return (
          <Button onClick={onClick} disabled={isEdge}>
            {pointer}
          </Button>
        )
    }
    render() {
        const { items } = this.state;
        return(
            <div>
                <Carousel renderArrow={this.myArrow}>
                    {CaseStudiesData.map((item, index) => {
                        return (
                            <div className="carousel-card" key={index}>
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
                </Carousel>
            </div>
        )
    }
}

export default CaseStudies;