import React, { Component } from 'react';
import './App.css';


class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: "funny cats"
    }
    this.updateSearch = this.updateSearch.bind(this);
  }
  componentDidMount(){
    // this.updateSearch()
  }
  updateSearch(e){

    console.log(e.target.value);

      this.setState({
        query: e.target.value
      });

  }
  render() {

    return (
      <div className="SearchBox">
        <input ref="query" type="text" value={this.state.query} onChange={this.updateSearch} className="" />
         <button>Search</button>
      </div>
    );
  }
}

export default SearchBox;
