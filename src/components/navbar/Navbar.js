import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import SelectBox from './../SelectBox/SelectBox';
import './Navbar.css';
import themes from './../../Constants/themes';
import StackPanel from './../StackPanel/StackPanel';

class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			activeNode: ''
		}
	}

	liftStateUp=(data)=>{
		this.setState({activeNode:data});
		this.props.liftStateUp(data);
	  }
  render() {
    return (
				<div className="navigation-bar">
					<div className="navigation-container">
					<StackPanel horizontalAlignment="center" verticalAlignment="center" orientation="horizontal"  padding="2%">
						<div className="image" ></div>
						<div className = "Space"></div>
						<div className="menu">
							<ul id="nav">
									<li id="nav-Home"><Link  style={{color: this.props.colour}} to="/home">Home</Link></li>
									<li id="nav-LevelUp"><Link style={{color: this.props.colour}} to="/levelUp">Level Up</Link></li>
									<li id="nav-Bug"><a style={{color: this.props.colour}} href="https://trello.com/c/h8WuGyYC/1-%F0%9F%90%9Ehey-i-found-a-bug">Report a bug</a></li>
									<li id="nav-About"><Link style={{color: this.props.colour}} to="/about">About</Link></li>
							</ul>
							</div>	
							<div className = "Space"></div>
							<div >
							<StackPanel horizontalAlignment="center" verticalAlignment="center" orientation="vertical"  padding="2%">
								<div className="Label">Theme:</div>
								<SelectBox options={themes} liftStateUp={this.liftStateUp}></SelectBox>
							</StackPanel>		
							</div>
							</StackPanel>
							<hr/>
					</div>
				</div>
	);
  }
}

export default Navbar;
