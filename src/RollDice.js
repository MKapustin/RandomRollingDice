import React, {Component} from "react"
import Die from "./Die"
import "./RollDice.css"

class RollDice extends Component{
  constructor(props){
    super(props);
    this.state = {
        die_1_num: 1,
        die_2_num: 1,
        button_text: "Roll Dice!",
        is_button_disabled: false
    };
    this.RollDice = this.RollDice.bind(this);
  }

  RollDice(){
    let new_die_1_num = Math.floor(Math.random() * 6 + 1)
    let new_die_2_num = Math.floor(Math.random() * 6 + 1)
    this.setState(
        {
            die_1_num: new_die_1_num,
            die_2_num: new_die_2_num,
            button_text: "Rolling...",
            is_button_disabled: true
        }
    )
    setTimeout(()=>{
      this.setState({button_text: "Roll Dice!", is_button_disabled: false})
    }, 500)
  }

  render(){
    return(
      <div className="RollDice">
        <div className="RollDice-dice-line">
            <Die die_num={this.state.die_1_num} shaking={this.state.is_button_disabled}/>
            <Die die_num={this.state.die_2_num} shaking={this.state.is_button_disabled}/>
        </div>  
        <div>
            <button className="RollDice-button" onClick={this.RollDice} disabled={this.state.is_button_disabled}>{this.state.button_text}</button>
        </div>     
      </div>
    );
  }
}

export default RollDice;