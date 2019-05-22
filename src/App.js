import React from 'react';
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

function App() {
  return (
    <div className="background">

      <div id="root">
        <Router>
          <Navbar />
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
        <ScrollUpButton/>
      </div>
      <div className="space"></div>
      <Footer/>
    </div>
  );
}

export default App;
