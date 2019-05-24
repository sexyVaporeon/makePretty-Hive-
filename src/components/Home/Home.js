import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./../About/About";

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
      showHex: this.props.showHex
    };
    
  }

  liftStateUp=(data)=>{
    this.setState({showHex:data});
  }

  getHexagon(){
     if(this.state.showHex){
       return (this.props.hex);
     }
  }
  render() {;
    return(<div>
      {this.getHexagon()}
      <Route
              path='/about'
                render={(props) => <About {...props} liftStateUp={this.liftStateUp} />}
              />
  </div>);
  }
}

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default Home;
