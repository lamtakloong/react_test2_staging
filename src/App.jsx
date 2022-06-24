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

import React, { Component } from "react";
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css";

class App extends Component {
  // Initialization state
  state = {todos:[
    {id:'001',name:'sleep',done:true},
    {id:'002',name:'study',done:true},
    {id:'003',name:'coding',done:false},
    {id:'004',name:'go away',done:true}
  ]}
  // addTodo used to add new item, the accepted parameter is todo Object
  addTodo = (todoObj)=>{
    // Get the current state
    const {todos} = this.state
    // Add new item into todos
    const newTodos = [todoObj,...todos]
    // Update state
    this.setState({todos:newTodos})
  }
  updateTodo = (id,done)=>{
    // Get the state of todos
    const {todos} = this.state
    // Update the state
    const newTodos = todos.map((todoObj)=>{
      if (todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos}= this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
