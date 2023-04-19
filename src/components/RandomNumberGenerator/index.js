// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    // console.log(Math.floor(Math.random() * 100))
    this.setState({
      number: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="container">
        <div className="content-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.randomNumber} type="button">
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
