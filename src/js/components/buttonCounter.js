import React, { Component } from 'react'

class ButtonCounter extends Component {
  constructor() {
    super()
    this.state = { valueNum: 0, valueText: '' }
    this.handleButtonNum = this.handleButtonNum.bind(this)
    this.handleButtonText = this.handleButtonText.bind(this)
  }

  handleButtonNum() {
    this.setState(prevState => ({
      valueNum: prevState.valueNum + 1,
    }))
  }

  handleButtonText() {
    this.setState(() => ({
      valueText: 'Hello World!',
    }))
  }

  render() {
    const { valueNum, valueText } = this.state
    return (
      <article className="component-style grid">
        <div className="col-lg-4 col-sm-5 col-xs-6">
          <h3>Counter button for increase</h3>
          <button onClick={this.handleButtonNum}>Increase</button>
          <h3>Result: {valueNum}</h3>
        </div>
        <div className="col-lg-4 col-sm-5 col-xs-6">
          <h3>Change Text after click</h3>
          <button onClick={this.handleButtonText}>Change!</button>
          <h3>Result: {valueText}</h3>
        </div>
        <div className="col-lg-4 col-sm-2" />
      </article>
    )
  }
}

export default ButtonCounter
