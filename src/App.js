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
       theme: 'Default'
     };
   }

   getBackground(){
     let classes =["background"];
     if (this.state.theme == 'Pokemon'){
       classes.push("PokemonBackground")
     }
     console.log(classes);
     return classes.join(' ');
   }
   liftStateUp=(data)=>{
     this.setState({theme:data});
   }

   getHexagon(){
     let type = this.state.theme+"Graduate";
     console.log(type);
     return(
      <Hexagon type ={type}></Hexagon>
     );
   }

   render(){
    return (
      <div className={this.getBackground()}>
  
        <div id="root">
          <Router>
            <Navbar liftStateUp={this.liftStateUp} />
            <div className="Mainrow">
            
  
  
            <Switch>
            <Route
              path='/'
                render={(props) => <Home {...props} hex={this.getHexagon()} />}
              />
              <Route path="/about" component={About} />
              <Route path="/levelUp" component={LevelUp} />
            </Switch> 
            
  
            </div>
          </Router>
          {/* {this.getHexagon()}
          <hr/> */}
          <ScrollUpButton/>
        </div>
        <div className="space"></div>
        <Footer/>
      </div>
    );
   }
}

export default App;
