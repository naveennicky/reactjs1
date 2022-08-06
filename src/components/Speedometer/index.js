// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onAccelerate = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBreak = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="ga">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          className="im"
        />
        <h1 className="head1">Speed is {count}mph</h1>
        <p className="para">Min limit is 0mph. Max limit is 200mph</p>
        <div className="car">
          <button className="but" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="but1" onClick={this.onBreak}>
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
