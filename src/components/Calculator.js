import React, { Component } from 'react';
import './styles/Calculator.scss';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            // SME R&D calculator
            profitLoss: 'Profit',
            profitLossSME: 0,
            expenditureSME: 0,
            uplift: 0,
            originalCT: 0,
            profitMinusUplift: 0,
            revisedCT: 0,

            creditSME: 0,
            // RDEC calculator
            expenditureRDEC: 0,
            RDEC: 0,
            notionalTax: 0,
            creditRDEC: 0
        }
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: parseInt(event.target.value, 10)
        });
    }
    handleProfitLoss = (event) => {
        this.setState({
            profitLoss: event.target.value
        });
    }
    handleSMECalculation = (event) => {
        event.preventDefault();
        if (this.state.profitLoss === 'Profit') {
            this.setState({ creditSME: this.handleProfitCalculation(this.state.profitLossSME, this.state.expenditureSME) });
        } else {
            this.setState({ creditSME: this.handleLossCalculation() });
        }
    }
    handleProfitCalculation = () => {
        this.setState({
            visible: true,
            uplift: this.state.expenditureSME * 1.3,
            originalCT: this.state.profitLossSME * .19,
            profitMinusUplift: this.state.profitLossSME - (this.state.expenditureSME * 1.3)
        });
        if (this.state.profitLossSME - (this.state.expenditureSME * 1.3) > 0) {
            this.setState({ 
                revisedCT: (this.state.profitLossSME - (this.state.expenditureSME * 1.3)) * .19,
                creditSME: (this.state.profitLossSME * .19) - ((this.state.profitLossSME - (this.state.expenditureSME * 1.3)) * .19)
            });
            return (this.state.profitLossSME * .19) - ((this.state.profitLossSME - (this.state.expenditureSME * 1.3)) * .19);
        } else {
            this.setState({ 
                revisedCT: 0,
                creditSME: this.state.profitLossSME * .19
            });
            return this.state.profitLossSME * .19;
        }
    }
    handleLossCalculation = () => {
        this.setState({
            visible: true
        });
    }
    handleRDECCalculation = (event) => {
        event.preventDefault();
        this.setState({
            visible: true,
            RDEC: this.state.expenditureRDEC * .12,
            notionalTax: (this.state.expenditureRDEC * .12) * .19,
            creditRDEC: this.state.expenditureRDEC * .0972
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
                    <form className="calculator-form" onSubmit={this.handleSMECalculation}>
                        <div className="radio">
                            <label>
                                <input 
                                    type="radio" 
                                    value="Profit" 
                                    checked={this.state.profitLoss === "Profit"}
                                    onChange={this.handleProfitLoss}
                                />
                                Profit
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="Loss" 
                                    checked={this.state.profitLoss === "Loss"}
                                    onChange={this.handleProfitLoss}
                                />
                                Loss
                            </label>
                        </div>
                        <p>Annual {this.state.profitLoss} £ <input 
                                                                type="text" 
                                                                name="profitLossSME" 
                                                                onChange={this.handleInputChange}></input></p>
                        <p>Annual R&D expenditure £ <input 
                                                        type="text" 
                                                        name="expenditureSME" 
                                                        onChange={this.handleInputChange}></input></p>
                        <button type="submit">Calculate R&D Tax Relief</button>
                    </form>
                    <div className={ this.state.visible && this.state.profitLoss === 'Profit' ? "calculation" : "invisible" }>
                        <p>Profit calculation</p>
                        <p>Profit: £{this.state.profitLossSME}</p>
                        <p>Expenditure: £{this.state.expenditureSME}</p>
                        <p>Uplift: £{this.state.uplift}</p>
                        <p>Original Corporation Tax: £{this.state.originalCT}</p>
                        <p>Profit - uplift: £{this.state.profitMinusUplift}</p>
                        <p>Revised CT: £{this.state.revisedCT}</p>
                        <p>Total tax saving up to: £{this.state.creditSME}</p>
                    </div>
                    <div className={ this.state.visible && this.state.profitLoss === 'Loss' ? "calculation" : "invisible" }>
                        <p>Loss calculation</p>
                        <p>Total saving up to: £{this.state.creditSME}</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <form className="calculator-form" onSubmit={this.handleRDECCalculation}>
                        <p>Annual R&D expenditure £ <input 
                                                        type="text" 
                                                        name="expenditureRDEC" 
                                                        onChange={this.handleInputChange}></input></p>
                        <button type="submit">Calculate R&D Tax Relief</button>
                    </form>
                    <div className={ this.state.visible ? "calculation-RDEC" : "invisible" }>
                        <p>Total saving up to: £{this.state.creditRDEC.toFixed(2)}</p>
                    </div>
                  </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Calculator;