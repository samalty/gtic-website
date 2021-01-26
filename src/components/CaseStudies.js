import React, { Component } from 'react';
import './styles/CaseStudies.scss';
import { CaseStudiesData } from './data/CaseStudiesData';
import Aos from 'aos';
import 'aos/dist/aos.css';

class CaseStudies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }
    handleLeft = (e) => {
        if (this.state.x === 0) {
            this.setState({ x: -100 * (CaseStudiesData.length-1) })
        } else this.setState({ x: this.state.x + 100 })
    };
    handleRight = (e) => {
        if (this.state.x === -100 * (CaseStudiesData.length-1)) {
            this.setState({ x: 0 })
        } else this.setState({ x: this.state.x - 100 })
    };
    componentDidMount() {
        Aos.init({
            duration: 2000
        });
        this.interval = setInterval(() => {
            if (this.state.x === -100 * (CaseStudiesData.length-1)) {
                this.setState({ x: 0 })
            } else this.setState({ x: this.state.x - 100 })
        }, 12000);
    }
    render() {
        return(
            <div className="carousel-container">
                <div className="cs-carousel">
                    {CaseStudiesData.map((item, index) => {
                        return (
                            <div className="cs-card" key={index} style={{transform:`translateX(${this.state.x}%)`}}>
                                <div className="cs-inner-card">
                                    <div className="card-header">
                                        <div data-aos="flip-up">
                                            <i className="fas fa-hard-hat"></i>
                                            <p className="card-header-text">Industry:</p>
                                            <p className="card-header-text">{item.industry}</p>
                                        </div>
                                        <div data-aos="flip-up">
                                            <i className="fas fa-pound-sign"></i>
                                            <p className="card-header-text">Turnover:</p>
                                            <p className="card-header-text">{item.turnover}</p>
                                        </div>
                                        <div data-aos="flip-up">
                                            <i className="fas fa-users"></i>
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
                    <button className="carousel-btn left" onClick={this.handleLeft}><span></span></button>
                    <button className="carousel-btn right" onClick={this.handleRight}><span></span></button>
                </div>
            </div>
        )
    }
}

export default CaseStudies;