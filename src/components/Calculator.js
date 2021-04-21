import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './styles/Calculator.scss';

class Calculator extends Component {
    // TO DO
    // Test calculator against outliers
    constructor(props){
        super(props)
        this.state = {
            calcDisplay: false,
            SME: true,
            visible: false,
            // SME R&D calculator
            profitLoss: 'profit',
            profitLossSME: 500000,
            expenditureSME: 500000,
            uplift: 0,
            originalCT: 0,
            profitMinusUplift: 0,
            revisedCT: 0,
            surrenderableLoss: 0,
            maxSurrender: 0,
            creditSME: 0,
            // RDEC calculator
            expenditureRDEC: 500000,
            RDEC: 0,
            notionalTax: 0,
            creditRDEC: 0
        }
    }
    displayCalculator = () => {
        this.setState({ calcDisplay: true });
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
        this.setState({ [event.target.name]: parseInt(event.target.value, 10) });
    }
    handleProfitLossRange = (event) => {
        this.setState({ profitLossSME: event.target.value });
    }
    handleProfitLoss = (event) => {
        this.setState({ profitLoss: event.target.value });
    }
    handleExpenditureSME = (event) => {
        this.setState({ expenditureSME: event.target.value });
    }
    handleExpenditureRDEC = (event) => {
        this.setState({ expenditureRDEC: event.target.value });
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
    formatOutput(n) {
        return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    render() {
        return (
            <div className="calc-container">
                <div className="calc-intro">
                    <h2>R&D Tax Calculator</h2><i class="fas fa-calculator"></i>
                    <p>Try out our calculator to estimate the Corporation Tax savings that your company could make from a successful R&D Tax Relief claim.</p>
                </div>
                <button onClick={this.displayCalculator} className={ this.state.calcDisplay ? "invisible" : "intro-btn" }><span>Get started</span></button>
                <div className={ this.state.calcDisplay ? "calculator" : "invisible" }>
                    <p>Does your company qualify as an SME or a large company?</p>
                    <Tabs className="tabs">
                    <TabList className="tablist">
                        <Tab className={ this.state.SME ? "active-tab" : "inactive-tab" }
                            onClick={this.toggleSME}>SME</Tab>
                        <Tab className={ this.state.SME ? "inactive-tab" : "active-tab" }
                            onClick={this.toggleLC}>Large company</Tab>
                    </TabList>
                    <TabPanel className="tab-panel">
                        <form className="calculator-form" onSubmit={this.handleSMECalculation}>
                            <p>Is your company making a profit or a loss?</p>
                            <div className="radio">
                                <label className="custom-radio">
                                    <input type="radio" 
                                        value="profit" 
                                        name="radio-btn"
                                        checked={this.state.profitLoss === "profit"}
                                        onChange={this.handleProfitLoss} />
                                    <span className="checkmark"></span>
                                </label>
                                <p>Profit</p>
                                <label className="custom-radio">
                                    <input type="radio" 
                                        value="loss" 
                                        name="radio-btn"
                                        checked={this.state.profitLoss === "loss"}
                                        onChange={this.handleProfitLoss} />
                                    <span className="checkmark"></span>
                                </label>
                                <p>Loss</p>
                            </div>
                            <p>Please enter the {this.state.profitLoss} recorded by your company and the amount spent on R&D in its last accounting period.</p>
                            <div className="range-container">
                                <p>Annual {this.state.profitLoss} £ <input type="text" 
                                                                        name="profitLossSME" 
                                                                        value={this.formatOutput(this.state.profitLossSME)}
                                                                        onChange={this.handleInputChange}></input></p>
                                <input type="range"
                                    className="slider"
                                    min={0} 
                                    max={1000000}
                                    step={25000}
                                    value={this.state.profitLossSME }
                                    onChange={this.handleProfitLossRange} />
                            </div>
                            <div className="range-container">
                                <p>R&D expenditure £ <input type="text" 
                                                                name="expenditureSME"
                                                                value={this.formatOutput(this.state.expenditureSME)}
                                                                onChange={this.handleInputChange}></input></p>
                                <input type="range"
                                    className="slider"
                                    min={0} 
                                    max={1000000}
                                    step={25000}
                                    value={this.state.expenditureSME }
                                    onChange={this.handleExpenditureSME} />
                            </div>
                            <br></br>
                            <button type="submit">Calculate R&D Tax Relief</button>
                        </form>
                        <div className={ this.state.visible && this.state.profitLoss === 'profit' ? "calculation" : "invisible" }>
                            <p>You could claim a total tax saving of up to:</p>
                            <p className="result"><b>£{this.formatOutput(this.state.creditSME.toFixed(2))}</b></p>
                            <p><b>Please note:</b> This R&D Tax Relief calculator provides an estimate of the Corporation Tax savings that your company 
                                may be entitled to, based on your estimated figures. Accurate figures are calculated by our experts upon receipt of your
                                expenditure details.</p>
                        </div>
                        <div className={ this.state.visible && this.state.profitLoss === 'loss' ? "calculation" : "invisible" }>
                            <p>You could claim a total tax saving of up to:</p>
                            <p className="result"><b>£{this.formatOutput(this.state.creditSME.toFixed(2))}</b></p>
                            <p><b>Please note:</b> This R&D Tax Relief calculator provides an estimate of the Corporation Tax savings that your company 
                                may be entitled to, based on your estimated figures. Accurate figures are calculated by our experts upon receipt of your
                                expenditure details.</p>
                        </div>
                    </TabPanel>
                    <TabPanel className="tab-panel">
                        <form className="calculator-form" onSubmit={this.handleRDECCalculation}>
                            <p>Please enter the amount your company spent on R&D in its last accounting period.</p>
                            <div className="range-container">
                                <p>R&D expenditure £ <input type="text" 
                                                                name="expenditureRDEC"
                                                                value={this.formatOutput(this.state.expenditureRDEC)}
                                                                onChange={this.handleInputChange}></input></p>
                                <input type="range"
                                    className="slider"
                                    min={0} 
                                    max={1000000}
                                    step={25000}
                                    value={this.state.expenditureRDEC }
                                    onChange={this.handleExpenditureRDEC} />
                            </div>
                            <br></br>
                            <button type="submit">Calculate R&D Tax Relief</button>
                        </form>
                        <div className={ this.state.visible ? "calculation" : "invisible" }>
                            <p>You could claim a total tax saving of up to:</p>
                            <p className="result"><b>£{this.formatOutput(this.state.creditRDEC.toFixed(2))}</b></p>
                            <p><b>Please note:</b> This R&D Tax Relief calculator provides an estimate of the Corporation Tax savings that your company 
                                may be entitled to, based on your estimated figures. Accurate figures are calculated by our experts upon receipt of your
                                expenditure details.</p>
                        </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Calculator;