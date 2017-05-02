import React, { Component } from 'react';
import Request from 'superagent';
import DocMeta from 'react-doc-meta';
import _ from 'lodash';
import './App.css';
import Giphs from './giphs.js';


class Api extends Component {
  constructor(props){
    super(props);
    this.state= {
      // giphs: "asdfdsffffff"
      image: "http://media0.giphy.com/media/guvCWEaSNe7iE/200w.gif"

    }
    this.search = this.search.bind(this);
    this.updateSearch = this.updateSearch.bind(this);

  }
  componentWillMount(){
    // this.search("funny");
  }

search(q){
  let url = `http://api.giphy.com/v1/gifs/search?q=${q}&api_key=dc6zaTOxFJmzC`;

  Request
  .get(url)
  .end((err, data)=>{
    if(err) console.log("Error: ",err)

    this.setState({
     data: data.body.data
   });

  })

}
updateSearch(){
  console.log(this.refs, " ", this.state.data);

  if(this.refs.query.value !==""){
    this.search(this.refs.query.value);
  }else{
    this.search("funny cats");
  }
}
  render() {

    // console.log("STATE", this.state.giphs)er
//     <meta name="twitter:card" content="summary_large_image">
// <meta name="twitter:site" content="@nytimes">
// <meta name="twitter:creator" content="@SarahMaslinNir">
// <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral">
// <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here.">
// <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg">
    let image = this.state.image;
    var tags = [
      {name: "twitter:card", content: "Some test text"},
      {name: "twitter:title", content: "Some title text"},
      {name: "twitter:image", content: image},
    ]


    return (
      <DocMeta tags={tags}>
      <div className="Api">
        <div className="hero">
          <div className="form">
            <div className="flexy">
            <input ref="query" type="text" />
            <button onClick={this.updateSearch}>Search</button>
            </div>
          </div>
        </div>
      
         <Giphs giphs={this.state.data} />
      </div>
    </DocMeta>
    );
  }
}

export default Api;
