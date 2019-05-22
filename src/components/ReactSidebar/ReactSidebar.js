import React, {Component} from "react";
import SideMenu from 'react-sidemenu';
import '../../../node_modules/react-sidemenu/dist/side-menu.css';
// const ReactSidebar = props => (
// 	<div>This is a component called ReactSidebar.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 	  
const items = [
	{divider: true, label: 'Theme', value: 'main-nav'},
	{label: 'item 1', value: 'item1', icon: 'fa-search',
	children: [
	  {label: 'item 1.1', value: 'item1.1', icon: 'fa-snapchat',
	  children: [
		{label: 'item 1.1.1', value: 'item1.1.1', icon: 'fa-anchor'},
		{label: 'item 1.1.2', value: 'item1.1.2', icon: 'fa-bar-chart'}]},
	  {label: 'item 1.2', value: 'item1.2'}]},
	{label: 'item 2', value: 'item2', icon: 'fa-automobile',
	children: [
	  {label: 'item 2.1', value: 'item2.1',
	  children: [
		{label: 'item 2.1.1', value: 'item2.1.1'},
		{label: 'item 2.1.2', value: 'item2.1.2'}]},
	  {label: 'item 2.2', value: 'item2.2'}]},
	{divider: true, label: 'Brandon', value: 'motors-nav'},
	{label: 'item 3', value: 'item3', icon: 'fa-beer'}
  ];

class ReactSidebar extends Component {
  render() {
    return (<SideMenu items={items}/>);
  }
}

// const ReactSidebarPropTypes = {
// 	// always use prop types!
// };

// ReactSidebar.propTypes = ReactSidebarPropTypes;

export default ReactSidebar;
