import React, { Component } from 'react';
import './Claims.css';
import Navbar from './Navbar';
import Footer from './Footer';
import claims from '../media/claims.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Claims extends Component {
    componentDidMount() {
        Aos.init({
            duration: 1000
        });
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="claims-intro-container">
                    <div>
                        <h1>Making a claim with GTIC</h1>
                        <h3>A claim with GTIC promises maximum value and total transparency. We have developed a rigorous claims process 
                            blueprint which is designed to identify and capitalise on all available opportunities, while keeping you in 
                            the loop every step of the way. </h3>
                        <p>For each claim we make, we adapt our blueprint to the individual needs of the client, ensuring a unique 
                            experience and an approach that caters fully for the claimant regardless of sector, size, or structure.</p>
                        <p>Our comprehensive claims process underpins the specialist and diverse technical expertise within our team. 
                            Combined, this enables us to deliver you a high value and compliant claim. Below we explain the steps involved 
                            in securing a rewarding R&D Tax Relief claim.</p>
                    </div>
                    <div className="img-container">
                        <img src={claims} alt="Making a claim" className="claims-img"></img>
                    </div>
                </div>
                <br></br>
                <div className="claims-container">
                    <div className="link one-two" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="link two-three" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="link three-four" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="link four-five" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="step one" data-aos="flip-up">
                        <div className="step-title">
                            <h2>1. Introduction</h2>
                        </div>
                        <p>We arrange an introductory phone call to discuss your business and the type of work that you undertake. 
                            This helps us to ascertain whether your projects or initiatives qualify for R&D Tax Relief. If your 
                            business is eligible, we will send you an engagement agreement and enrol you onto a workshop.</p>
                    </div>
                    <div className="arrow-down"></div>
                    <div className="step two" data-aos="flip-up">
                        <div className="step-title">
                            <h2>2. Workshops to identify opportunities</h2>
                        </div>
                        <p>Our workshops aim to provide you with all the essential knowledge needed to play your part in a smooth 
                            and rewarding R&D Tax Relief claim. Following a brief presentation detailing the incentive’s background, 
                            the claims process and eligible expenditure, we will work with you to:</p>
                        <ul>
                            <li>Identify the key personnel involved within your company</li>
                            <li>Scope out the project structure</li>
                            <li>Establish a timeline for your claim</li>
                        </ul>
                        <p>Depending on your preference, our workshops can be carried out in person or via video conference.</p>
                    </div>
                    <div className="arrow-down"></div>
                    <div className="step three" data-aos="flip-up">
                        <div className="step-title">
                            <h2>3. Project qualification</h2>
                        </div>
                        <p>This is where we dive into the detail behind your project. Discussions with your project managers, engineers 
                            and product owners about your project goals and the approach taken will help us to further scope out the 
                            work involved and pinpoint the specific areas where relief can be claimed.</p>
                        <p>At the end of this stage, we will have enough information to write the technical narrative of your claim 
                            report and you will be a step closer to a valuable reward for your R&D efforts.</p>
                    </div>
                    <div className="arrow-down"></div>
                    <div className="step four" data-aos="flip-up">
                        <div className="step-title">
                            <h2>4. Expenditure analysis</h2>
                        </div>
                        <p>Having collected documents such as your company accounts and tax returns, we conduct an expenditure analysis 
                            to calculate the available R&D Tax Relief benefit. This is where you find out the eligible costs and discover 
                            the financial value of your claim.</p>
                    </div>
                    <div className="arrow-down"></div>
                    <div className="step five" data-aos="flip-up">
                        <div className="step-title">
                            <h2>5. Reporting and submission</h2>
                        </div>
                        <p>Upon your approval, we file your completed claim report with HMRC, and either incorporate the R&D Tax Relief 
                            calculation into your Corporation Tax return or assist your accountant in doing so.</p>
                        <p>Our claim reports far exceed the compliance standards expected by HMRC, so the risk of an enquiry is minimal. 
                            However, in the unlikely event that the taxman conducts a compliance check, we will exercise our experience 
                            of closing down enquiries at no extra cost.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Claims;