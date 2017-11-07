import React, { Component } from 'react'

class ButtonAlert extends Component {
  constructor() {
    super()
    this.state = { value: 0 }
    this.handleButton = this.handleButton.bind(this)
  }

  handleButton() {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }))
  }

  render() {
    const { value } = this.state
    return (
      <article>
        <h3>Testing Button</h3>
        <button onClick={this.handleButton}>Increase</button>
        <h3>Result: {value}</h3>
      </article>
    )
  }
}

export default ButtonAlert
