import React, { Component } from "react";
import axios from "axios"

export default class Search extends Component {
  search = () => {
    // * Get input value from Search item
    // console.log(this.keyWordElement.value);  // 
    // const {value} = this.keyWordElement;     // 1. define input value
    // const {keyWordElement.value} = this;     // 2. define input value
    // const {keyWordElement:{value}} = this;   // 3. define input value
    const {keyWordElement:{value:keyWord}} = this;  // 4. define input value and rename "keyWord"
    // console.log(keyWord);
    // * Request network
    // https://api.github.com/search/users?q=xxxxxx
    // * use proxy if setupProxy.js set localhost:5000
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      Response => {console.log('success',Response.data);},
      error => {console.log('failed',error);}
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
