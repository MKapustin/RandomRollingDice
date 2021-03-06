import React, {Component} from "react"
import "./Die.css"

class Die extends Component{
  getDieClass(die_dots_amount){
      let num_to_words = {
          1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six"
      }
      return `fas fa-dice-${num_to_words[die_dots_amount]} fa-10x`;
  }

  render(){
    return(
      <div className={`Die ${this.props.shaking ? 'shaking' : ''}`}>
        <i className={this.getDieClass(this.props.die_num)} style={{color: "purple"}}></i>
      </div>
    );
  }
}

export default Die;