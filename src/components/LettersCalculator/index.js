// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {varInput: ''}

  calculateLength = event => {
    this.setState({varInput: event.target.value})
  }

  render() {
    const {varInput} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
        <div className="content-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <div className="bar-container">
            <label htmlFor="calculatorInput" className="phrase">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input-bar"
              placeholder="calculator"
              id="calculatorInput"
              value={varInput}
              onChange={this.calculateLength}
            />
          </div>
          <div className="number-container">
            <p className="number">No.of Letters: {varInput}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
