import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    // 1
    // console.log(this.keyWordElement.value);
    // 2
    // const {value} = this.keyWordElement.value
    // console.log(value);
    // 3
    // const {keyWordElement:{value}} = this
    // console.log(value);
    //4 Get user input (連續解構賦值 + 重命名)
    const {keyWordElement:{value:keyWord}} = this
    // const link = 'https://api.github.com/search/users?q='
    const link = 'http://localhost:5000/search/users?q='
    
    axios.get(`${link}${keyWord}`).then(
    // axios.get(`http://localhost:5000/search/users?q=${keyWord}`).then(
      response => {console.log('成功了',response.data);},
      error => {console.log('失敗了',error);}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={ c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
