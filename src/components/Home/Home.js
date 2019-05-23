import React from 'react';

// const Home = props => (
// 	<div>This is a component called Home.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class Home extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {;
    console.log(this.props.hex)
    return(<div>
       {this.props.hex}
       <hr/>
  </div>);
  }
}

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default Home;
