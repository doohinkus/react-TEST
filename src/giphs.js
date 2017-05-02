import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import './App.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';



class Giphs extends Component {
  constructor(props){
    super(props);
    this.state= {
    }


  }

  componentWillMount(){

  }

  render() {
    // console.log(this.props.giphs)
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 900,
      transitionLeaveTimeout: 800
    }

    let giphs = _.map(this.props.giphs, (giph, index)=>{

        return <div key={index} className="item img">

        <a href={"https://twitter.com/share?text=" + giph.images.fixed_width.url} target="_blank">
          <img src={giph.images.fixed_width.url}  />
        </a>



     </div>
    })
    // console.log("STATE", this.state.giphs)

    return (
     <div className="masonry">
       {giphs}
     </div>
    );
  }
}

export default Giphs;
