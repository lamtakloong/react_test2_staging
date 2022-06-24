/*
import React from "react";

class App extends React.Component {
  render() {
    return <div>hello React</div>;
  }
}

export default App;
*/
// -----------------------------------

import React,{Component} from "react";
import Hello from './components/Hello'
import Welcome from './components/Welcome'

class App extends Component {
  render() {
    return (
    <div>
        <Hello/>
        <Welcome/>
        </div>
    )
  }
}

export default App;
