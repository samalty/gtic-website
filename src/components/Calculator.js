import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './styles/Calculator.scss';

class Calculator extends Component {
    // TO DO
    // Form validation for punctuation
    // Test calculator against outliers
    // Add punctiation to output
    constructor(props){
        super(props)
        this.state = {
            SME: true,
            visible: false,
            // SME R&D calculator
            profitLoss: 'profit',
            profitLossSME: 0,
            expenditureSME: 0,
            uplift: 0,
            originalCT: 0,
            profitMinusUplift: 0,
            revisedCT: 0,
            surrenderableLoss: 0,
            maxSurrender: 0,
            creditSME: 0,
            // RDEC calculator
            expenditureRDEC: 0,
            RDEC: 0,
            notionalTax: 0,
            creditRDEC: 0
        }
    }
    toggleSME = () => {
        if (this.state.SME === false) { this.setState({ SME: true }); }
        this.setState({ visible: false });
    }
    toggleLC = () => {
        if (this.state.SME === true) { this.setState({ SME: false }); }
        this.setState({ visible: false });
    }
    handleInputChange = (event) => {
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
        if (isNaN(this.state.profitLossSME) || isNaN(this.state.expenditureSME)) {
            alert('Please ensure you have entered a valid sum for both form fields.')
        } else {
            this.setState({ visible: true });
            if (this.state.profitLoss === 'profit') {
                this.setState({ creditSME: this.handleProfitCalculation(this.state.profitLossSME, this.state.expenditureSME) });
            } else {
                // Tax credit at 14.5% is applied to loss calculation here
                this.setState({ creditSME: this.handleLossCalculation(this.state.profitLossSME, this.state.expenditureSME) * .145 });
            }
        }
    }
    handleProfitCalculation = () => {
        this.setState({
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
            uplift: this.state.expenditureSME * 1.3,
            profitMinusUplift: (0 - this.state.profitLossSME) - (this.state.expenditureSME * 1.3),
            surrenderableLoss: Math.abs((0 - this.state.profitLossSME) - (this.state.expenditureSME * 1.3)),
            maxSurrender: this.state.expenditureSME + (this.state.expenditureSME * 1.3)
        });
        if (Math.abs((0 - this.state.profitLossSME) - (this.state.expenditureSME * 1.3)) === 0) {
            return 'Input here'
        } else {
            return Math.min(Math.abs((0 - this.state.profitLossSME) - (this.state.expenditureSME * 1.3)), this.state.expenditureSME + (this.state.expenditureSME * 1.3));
        }
    }
    handleRDECCalculation = (event) => {
        event.preventDefault();
        if (isNaN(this.state.expenditureRDEC)) {
            alert('Please ensure you have entered a valid sum for your R&D expenditure.');
        } else {
            this.setState({
                visible: true,
                RDEC: this.state.expenditureRDEC * .12,
                notionalTax: (this.state.expenditureRDEC * .12) * .19,
                creditRDEC: this.state.expenditureRDEC * .0972
            });
        }
    }
    render() {
        return (
            <div className="calc-container">
                <h2>R&D Tax Calculator</h2>
                <p>Use this calculator to estimate the Corporation Tax savings that your company could make from a successful R&D Tax Relief claim.</p>
                <hr />
                <p>Does your company qualify as an SME or a large company?</p>
                <Tabs className="tabs">
                  <TabList className="tablist">
                    <Tab className={ this.state.SME ? "active-tab" : "inactive-tab" }
                         onClick={this.toggleSME}>SME</Tab>
                    <Tab className={ this.state.SME ? "inactive-tab" : "active-tab" }
                         onClick={this.toggleLC}>Large company</Tab>
                  </TabList>
                  <br></br>
                  <TabPanel className="tab-panel">
                    <form className="calculator-form" onSubmit={this.handleSMECalculation}>
                        <p>Is your company making a profit or a loss?</p>
                        <div className="radio">
                            <label className="custom-radio">
                                <input 
                                    type="radio" 
                                    value="profit" 
                                    name="radio-btn"
                                    checked={this.state.profitLoss === "profit"}
                                    onChange={this.handleProfitLoss}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <p>Profit</p>
                            <label className="custom-radio">
                                <input 
                                    type="radio" 
                                    value="loss" 
                                    name="radio-btn"
                                    checked={this.state.profitLoss === "loss"}
                                    onChange={this.handleProfitLoss}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <p>Loss</p>
                        </div>
                        <p>Please enter the {this.state.profitLoss} recorded by your company in its last accounting period.</p>
                        <p>Annual {this.state.profitLoss} £ <input 
                                                                type="text" 
                                                                name="profitLossSME" 
                                                                onChange={this.handleInputChange}></input></p>
                        <p>Please enter the amount your company spent on R&D in its last accounting period.</p>
                        <p>Annual R&D expenditure £ <input 
                                                        type="text" 
                                                        name="expenditureSME" 
                                                        onChange={this.handleInputChange}></input></p>
                        <button type="submit">Calculate R&D Tax Relief</button>
                    </form>
                    <div className={ this.state.visible && this.state.profitLoss === 'profit' ? "calculation" : "invisible" }>
                        <p>Total tax saving up to <p className="result"><b>£{this.state.creditSME.toFixed(2)}</b></p></p>
                        <p>GTIC fee <p className="result"><b>N/A</b></p></p>
                        <p>Net saving up to <p className="result"><b>N/A</b></p></p>
                    </div>
                    <div className={ this.state.visible && this.state.profitLoss === 'loss' ? "calculation" : "invisible" }>
                        <p>Total tax saving up to <p className="result"><b>£{this.state.creditSME.toFixed(2)}</b></p></p>
                        <p>GTIC fee <p className="result"><b>N/A</b></p></p>
                        <p>Net saving up to <p className="result"><b>N/A</b></p></p>
                    </div>
                  </TabPanel>
                  <TabPanel className="tab-panel">
                    <form className="calculator-form" onSubmit={this.handleRDECCalculation}>
                        <p>Please enter the amount your company spent on R&D in its last accounting period.</p>
                        <p>Annual R&D expenditure £ <input 
                                                        type="text" 
                                                        name="expenditureRDEC" 
                                                        onChange={this.handleInputChange}></input></p>
                        <button type="submit">Calculate R&D Tax Relief</button>
                    </form>
                    <div className={ this.state.visible ? "calculation" : "invisible" }>
                        <p>Total tax saving up to <p className="result"><b>£{this.state.creditRDEC.toFixed(2)}</b></p></p>
                        <p>GTIC fee <p className="result"><b>N/A</b></p></p>
                        <p>Net saving up to <p className="result"><b>N/A</b></p></p>
                    </div>
                  </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default Calculator;