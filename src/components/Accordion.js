import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Opportunities.scss';
import { OpportunitiesData } from './OpportunitiesData';

function Accordion() {
    const [incentives, setIncentives] = useState(OpportunitiesData);
    const toggleAccordion = index => {
        setIncentives(incentives.map((incentive, i) => {
            if (i === index) {
                incentive.open = !incentive.open;
            } else {
                incentive.open = false;
            }
            return incentive;
        }))
    }
    return (
        <div>
            {OpportunitiesData.map((item, index) => {
                return (
                    <div>
                        <button className="accordion" onClick={() => toggleAccordion(index)}><h2 className="accordion-title">{item.title}</h2><i class="fas fa-arrow-alt-circle-down"></i></button>
                        <div className={"accordion-content" + (item.open ? 'open': '')} key={index}>
                            <i className={item.icon}></i>
                            <p>{item.description1}</p>
                            <p>{item.description2}</p>
                            <Link to={item.path}>
                                <button className="find-out">Find out more</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion;