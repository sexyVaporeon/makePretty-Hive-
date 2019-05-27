import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./../About/About";
import HeroJourneyImage from "../../Themes/Default/Hero.PNG";
import HexagonArea from '../HexagonArea/HexagonArea';
import Hexagon from './../Hexagon/Hexagon';

// const Home = props => (
// 	<div>This is a component called Home.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class LevelUp extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showHex:true
    }
    //this.props.liftStateUp(false);
  }

  liftStateUp=(data)=>{
    this.setState({showHex:data});
  }

  getHexagon(name){
    console.log(name);
     if(this.state.showHex){
       if(name){
         console.log('fdsgSRF');
        let type = this.props.theme+name;
        return(
         <Hexagon type ={type}></Hexagon>
        );
       }
       return (this.props.hex);
     }
  }

  render = () => {
    console.log(this.state.showHex);
    return(
    <div>
      <HexagonArea hex={this.getHexagon()} name= {"C#"} />
      <HexagonArea hex={this.getHexagon()} name= {"Java"}/>
      <HexagonArea hex={this.getHexagon('Web')} name= {"Web"}/>
      <HexagonArea hex={this.getHexagon()} name= {"Design"}/>
      <HexagonArea hex={this.getHexagon()} name= {"Database"}/>
    </div>
    );
  }
}

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default LevelUp;
