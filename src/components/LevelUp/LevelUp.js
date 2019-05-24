import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./../About/About";
import HeroJourneyImage from "../../Themes/Default/Hero.PNG";

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
    this.props.liftStateUp(false);
  }

  liftStateUp=(data)=>{
    console.log('jdkhfdkfa');
    this.setState({showHex:data});
  }

  getHexagon(){
     if(this.state.showHex){
       return (this.props.hex);
     }
  }
  render() {
    console.log(this.state.showHex);
    return(<div>
      {this.getHexagon()}
      WelcomejfDzbbbbbbbbbbbbbbbbbbbbbbbbbb
      <Route
              path='/about'
                render={(props) => <About {...props} liftStateUp={this.liftStateUp} theme={this.props.theme}/>}
              />
  </div>);
  }
}

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default LevelUp;
