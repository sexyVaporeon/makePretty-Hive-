import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import About from "./../About/About";
import LevelUp from '../LevelUp/LevelUp';
import HexagonArea from './../HexagonArea/HexagonArea';

// const Home = props => (
// 	<div>This is a component called Home.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showHex: true
    };
    console.log(this.props.theme)
    
  }

  liftStateUp=(data)=>{
    this.setState({showHex:data});
  }

  getHexagon(){
     if(this.state.showHex){
       return (this.props.hex);
     }
  }

  render() {
    return(<div>
      <div>
      <Link to="/levelUp"><HexagonArea hex={this.getHexagon()} name= {"Graduate Track"}/></Link>      
      </div>
      <Route
              path='/about'
                render={(props) => <About {...props}  theme={this.props.theme}/>}
              />
      <Route
              path='/levelUp'
                render={(props) => <LevelUp {...props} liftStateUp={this.liftStateUp} hex={this.props.hex} showHex={true}  theme={this.props.theme}/>}
              />        
  </div>);
  }
}

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default Home;
