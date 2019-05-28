import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom";
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
     else if (this.state.theme == 'Spongebob'){
       classes.push("SpongebobBackground")
     }
     return classes.join(' ');
   }
   liftStateUp=(data)=>{
     this.setState({theme:data});
   }

   getHexagon(){
     let type = this.state.theme+"Graduate";
     return(
      <Hexagon type ={type}></Hexagon>
     );
   }

   render(){
    return (
      <div className={this.getBackground()}>
  
        <div id="root">
          <Router >
            <Navbar liftStateUp={this.liftStateUp} />
            <div className="Mainrow">
            
  
  
            <Switch>
              <Route
                path='/home'
                render={(props) => <Home {...props} hex={this.getHexagon()} showHex={true} theme={this.state.theme}/>}
              />
              <Route exact path="/" component={() => <Redirect to="/home" />}/>  
              <Route
              path='/about'
                render={(props) => <About {...props}  theme={this.state.theme}/>}
              />
              <Route path="/levelUp" 
              render={(props) => <LevelUp {...props} hex={this.getHexagon()} showHex={true}  theme={this.state.theme}/>}
              />
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
