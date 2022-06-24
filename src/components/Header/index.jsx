import React, { Component } from 'react';
import propTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css'

export default class Header extends Component {
  // 對接收props的類型, 必要性進行限制
  static propTypes = {
    addTodo:propTypes.func.isRequired
  }
  handleKeyUp =(event)=>{
    // 解構賦值keyCode, target
    const {keyCode,target} = event
    // 判斷是否回車鍵
    if (keyCode !== 13) return
    // 判斷是否為空
    if (target.value.trim() === '') {
      alert('輸入不能為空!!')
      return
    }
    // 準備好一個todo對象
    const todoObj = {id:nanoid(),name:target.value,done:false}
    // todoObj 傳到 App
    this.props.addTodo(todoObj)
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
      </div>
    );
  }
}
