import React, { Component } from 'react';
import './styles/Calculator.scss';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            expenditure: 0,
            RDEC: 0,
            notionalTax: 0,
            credit: 0
        }
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: parseInt(event.target.value, 10)
        });
    }
    handleRDECCalculation = (event) => {
        event.preventDefault();
        this.setState({
            visible: true,
            RDEC: this.state.expenditure * .12,
            notionalTax: (this.state.expenditure * .12) * .19,
            credit: this.state.expenditure * .0972
        });
    }
    render() {
        return (
            <div className="calc-container">
                <h2>R&D Tax Calculator</h2>
                <p>Use this calculator to estimate the Corporation Tax savings that your company could make from a successful R&D Tax Relief claim.</p>
                <Tabs className="tabs">
                  <TabList>
                    <Tab className="tab">SME</Tab>
                    <Tab className="tab">Large company</Tab>
                  </TabList>
                  <TabPanel>
                    <h2>SME calculator</h2>
                  </TabPanel>
                  <TabPanel>
                    <form className="rdec-form" onSubmit={this.handleRDECCalculation}>
                        <p>Annual R&D expenditure £ <input type="text" name="expenditure" onChange={this.handleInputChange}></input></p>
                        <button type="submit">Calculate R&D Tax Relief</button>
                    </form>
                    <div className={ this.state.visible ? "calculation" : "invisible" }>
                        <p>Total saving up to: £{this.state.credit.toFixed(2)}</p>
                    </div>
                  </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Calculator;