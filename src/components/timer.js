import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { startTimer, tick, stopTimer } from "../actions/timer"

class Timer extends Component {
  componentWillUnmount() {
    if (this._interval) cancelAnimationFrame(this._interval)
  }

  start = () => {
    this._interval = requestAnimationFrame(this.progress)

    this.props.dispatch(startTimer())
  }

  progress = () => {
    this.props.dispatch(tick())
    this._interval = requestAnimationFrame(this.progress)
  }

  stop = () => {
    cancelAnimationFrame(this._interval)

    this.props.dispatch(stopTimer())
  }

  click() {
    this.props.isOn ? this.start() : this.stop()
  }

  format(time) {
    const pad = (time, length) => {
      while (time.length < length) {
        time = "0" + time
      }
      return time
    }

    time = new Date(time)
    let m = pad(time.getMinutes().toString(), 2)
    let s = pad(time.getSeconds().toString(), 2)
    let ms = pad(time.getMilliseconds().toString(), 3)

    return `${m} : ${s} . ${ms}`
  }

  render() {
    return (
      <div>
        <h1>
          Time: {this.format(this.props.time)}
        </h1>
        <button onClick={this.props.isOn ? this.stop : this.start}>
          {this.props.isOn ? "Stop" : "Start"}
        </button>
      </div>
    )
  }
}

Timer.propTypes = {
  isOn: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  isOn: state.timer.isOn,
  time: state.timer.time,
}))(Timer)
