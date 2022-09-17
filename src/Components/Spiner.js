import React, { Component } from 'react'
import Loading from '../Loading.gif'

export default class Spiner extends Component {
  render() {
    return (
      <div>
        <center><img src={Loading} alt = "loading" /></center>
      </div>
    )
  }
}
