import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './styles/Insights.scss';
import Navbar from './Navbar';
import { CaseStudiesData } from './data/CaseStudiesData';
import Footer from './Footer';

class Insights extends Component {
    constructor(props){
        super(props)
        this.state = {
            caseStudy: 1
        }
    }
    toggleTab = (item) => {
        this.setState({ caseStudy: item.id });
    }
    render() {
        return (
            <div className="background">
                <Navbar />
                <div className="header-container">
                    <h1>Insights</h1>
                </div>
                <div className="insights-intro-container">
                    <div className="insights-overlay">
                        <div className="insights-intro">
                            <h3>Insights is where we share much of our expertise directly with you. If you have a query relating to a 
                                particular tax incentive or grant, browse our posts below to see if we have you covered.</h3>
                        </div>
                    </div>
                </div>
                <div className="insights-container">
                    <div className="latest-articles">
                        <h2>Latest articles</h2>
                        <div className="article">
                            <div className="article-overlay">
                                <h3>Innovation technology and benefits of the R&D Tax Incentive</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula tristique feugiat. Nulla a aliquet ex, quis egestas nisi. Suspendisse.</p>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article-overlay">
                                <h3>Research and development tax incentive explained</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula tristique feugiat. Nulla a aliquet ex, quis egestas nisi. Suspendisse.</p>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article-overlay">
                                <h3>Common mistakes to avoid in research and development tax claims</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula tristique feugiat. Nulla a aliquet ex, quis egestas nisi. Suspendisse.</p>
                            </div>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="categories-container">
                            <h2>Browse by category</h2>
                            <button className="category">Making a claim</button>
                            <button className="category">Eligibility</button>
                            <button className="category">HMRC</button>
                            <button className="category">Qualifying activities</button>
                            <button className="category">Qualifying expenditure</button>
                            <button className="category">Accounting</button>
                        </div>
                    </div>
                    <div className="case-studies">
                        <div className="case-studies-container">
                            <h2>Case studies</h2>
                            <Tabs className="tabs">
                                <TabList className="tablist">
                                    {CaseStudiesData.map((item) => {
                                        return (
                                            <Tab key={item.id} onClick={this.toggleTab.bind(this,item)} className={ this.state.caseStudy === item.id ? "active-tab" : "inactive-tab" }>{item.title}</Tab>
                                        )
                                    })}
                                </TabList>
                                {CaseStudiesData.map((item) => {
                                    return (
                                        <TabPanel className="tab-panel" key={item.id}>
                                            <h2>{item.intro}</h2>
                                            <div className="case-study-info">
                                                <div className="info-header">
                                                    <i className="fas fa-industry"></i>
                                                    <h2>Background</h2>
                                                </div>
                                                <div className="info-body">
                                                    <p>{item.background}</p>
                                                </div>
                                            </div>
                                            <div className="case-study-info">
                                                <div className="info-header">
                                                    <i className="fas fa-exclamation-circle"></i>
                                                    <h2>Action</h2>
                                                </div>
                                                <div className="info-body">
                                                    <p>{item.action}</p>
                                                </div>
                                            </div>
                                            <div className="case-study-info">
                                                <div className="info-header">
                                                    <i className="fas fa-handshake"></i>
                                                    <h2>Result</h2>
                                                </div>
                                                <div className="info-body">
                                                    <p>{item.result}</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    )
                                })}
                            </Tabs>
                        </div>
                    </div>
                </div>
                <div className="insights-cta">
                    <div className="insights-overlay">
                        <div className="cta-textbox">
                            <h2>Subhead</h2>
                            <p>Can’t find exactly what you’re looking for? Speak directly to one of our expert advisors, today.</p>
                            <Link className="button-link" to="/contact">
                                <button className="consultation">GET IN TOUCH</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Insights;