import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import LevelUp from "./components/LevelUp/LevelUp";
import ScrollUpButton from "react-scroll-up-button";
import ReactSidebar from './components/ReactSidebar/ReactSidebar';
import Hexagon from './components/Hexagon/Hexagon';
// import logo from 'src/Icon/hive.PNG';
import './App.css';

 class App extends Component {
   constructor(props){
     super(props);
     this.state={
       activeNode: 'fhf'
     };
   }

   liftStateUp=(data)=>{
     this.setState({activeNode:data});
   }

   render(){
    return (
      <div className="background">
  
        <div id="root">
          <Router>
            <Navbar liftStateUp={this.liftStateUp} />
            <div className="Mainrow">
            
            <ReactSidebar/>
  
  
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/levelUp/" component={LevelUp} />
            </Switch> 
            
  
            </div>
          </Router>
          <Hexagon type ="DefaultGraduate"></Hexagon>
          <hr/>
          <div className="col-md-6">{this.state.activeNode}</div>
          <ScrollUpButton/>
        </div>
        <div className="space"></div>
        <Footer/>
      </div>
    );
   }
}

export default App;
