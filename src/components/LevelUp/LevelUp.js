import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./../About/About";
import HeroJourneyImage from "../../Themes/Default/Hero.PNG";
import HexagonArea from '../HexagonArea/HexagonArea';
import Hexagon from './../Hexagon/Hexagon';
import './LevelUp.css';

class LevelUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showHex:true
    }
  }

  liftStateUp=(data)=>{
    this.setState({showHex:data});
  }

  getHexagon(name){
    let type ="";
     if(this.state.showHex){
       if(name && this.props.theme !== 'Dark'){
         type = this.props.theme+name;
       } else{
          type = "Default"+name;
       }
      return( <Hexagon type={type}/>);
     }
     return (this.props.hex);
  }

  render = () => {
    return(
    <div>
      <HexagonArea hex={this.getHexagon('C')} name= {"C#"} colour={this.props.colour}/>
      <HexagonArea hex={this.getHexagon('Java')} name= {"Java"} colour={this.props.colour}/>
      <HexagonArea hex={this.getHexagon('Web')} name= {"Web"} colour={this.props.colour}/>
      <HexagonArea hex={this.getHexagon('Design')} name= {"Design"} colour={this.props.colour}/>
      <HexagonArea hex={this.getHexagon('Database')} name= {"Database"} colour={this.props.colour}/>
      <div className="space"></div>
    </div>
    );
  }
}

export default LevelUp;
