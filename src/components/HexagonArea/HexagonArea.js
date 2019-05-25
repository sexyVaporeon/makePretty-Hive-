import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./../About/About";
import HeroJourneyImage from "../../Themes/Default/Hero.PNG";
import style from './HexagonArea.css';

class HexagonArea extends React.Component {

    constructor(props){
      super(props);
      this.state={
        showHex:true
      }
    }
  
    getHexagon(){
      if(this.state.showHex){
        return (this.props.hex);
      }
   }
  
    render = () => {
  
      return (
        <div class = "sized">
          {this.getHexagon()}
          {this.props.name}
        </div>
        );
    }
  }

export default HexagonArea;