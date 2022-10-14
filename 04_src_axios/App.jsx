import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/students').then(
            response => {console.log('Success',response.data);},
            error => {console.log('error',error);}
        )
    }
    getCarData = () => {
      axios.get('http://localhost:3000/car').then(
          response => {console.log('Success',response.data);},
          error => {console.log('error',error);}
      )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>click me to access data</button>
        <button onClick={this.getCarData}>click me to access data</button>
      </div>
    )
  }
}