import React from 'react';
import hiveImage from "../../Icon/hive.PNG";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SelectBox from './../SelectBox/SelectBox';
import './Navbar.css';
import themes from './../../Constants/themes';
import StackPanel from './../StackPanel/StackPanel';
// import PropTypes from 'prop-types';
// import styles from './navbar.scss';

// const navbar = props => (
// 	<div>This is a component called navbar.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Navbar extends React.Component {
	constructor(props){
		super(props);
		this.state={
			activeNode: ''
		}
	}

	setActiveNode=(name)=>{
		this.setState({activeNode:name});
		this.props.liftStateUp(name);
	}

	liftStateUp=(data)=>{
		this.setState({activeNode:data});
		this.props.liftStateUp(data);
	  }
  render() {
    return ( 
				<div className="navigation-bar">
					<div id="navigation-container">
					<StackPanel horizontalAlignment="center" verticalAlignment="center" orientation="horizontal"  padding="3%">
						<div className="image" ></div>
						<div className="menu">
							<ul id="nav">
									<li id="nav-Home"><Link to="/">Home</Link></li>
									<li id="nav-LevelUp"><Link to="/levelUp">LevelUp</Link></li>
									<li id="nav-Bug"><a href="https://trello.com/c/h8WuGyYC/1-%F0%9F%90%9Ehey-i-found-a-bug">Report a bug</a></li>
									<li id="nav-About"><Link to="/about">About</Link></li>
							</ul>
							</div>	
							<div >
							<SelectBox options={themes} liftStateUp={this.liftStateUp}></SelectBox>
							</div>
							</StackPanel>
							<hr/>
					</div>
				</div>
	);
  }
}

// const navbarPropTypes = {
// 	// always use prop types!
// };

//navbar.propTypes = navbarPropTypes;

export default Navbar;
