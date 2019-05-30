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
     if (localStorage.getItem("theme") === null)
     this.state={
       theme: 'Default',
     };

    else 
      this.state ={
        theme: localStorage.getItem('theme')
      };
     this.colour = "";
     localStorage.setItem('theme', this.state.theme)
   }

   getBackground(){
     let classes =["background"];
     if (this.state.theme == 'Pokemon'){
       classes.push("PokemonBackground")
       this.colour = "red";
       localStorage.setItem('theme',this.state.theme)
     }
     else if (this.state.theme == 'Spongebob'){
       classes.push("SpongebobBackground")
       this.colour = "rgb(20, 17, 17)";
       localStorage.setItem('theme',this.state.theme)
     } else if (this.state.theme == 'Avengers'){
       classes.push('AvengersBackground')
       this.colour = "aqua"
       localStorage.setItem('theme',this.state.theme)
     } else if (this.state.theme =="Dark"){
       classes.push("DarkBackground")
       localStorage.setItem('theme',this.state.theme)
       
     }
     console.log(this.colour);
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
  
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>  
      

        <div id="root">
          <Router >
            <Navbar liftStateUp={this.liftStateUp}/>
            <div className="Mainrow">
            
  
  
            <Switch>
              <Route
                path='/home'
                render={(props) => <Home {...props} hex={this.getHexagon()} showHex={true} theme={this.state.theme} colour={this.colour}/>}
              />
              <Route exact path="/" component={() => <Redirect to="/home" />}/>  
              <Route
              path='/about'
                render={(props) => <About {...props}  theme={this.state.theme}/>}
              />
              <Route path="/levelUp" 
              render={(props) => <LevelUp {...props} hex={this.getHexagon()} showHex={true}  theme={this.state.theme} colour={this.colour}/>}
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
