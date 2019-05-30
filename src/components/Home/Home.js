import React from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import About from "./../About/About";
import LevelUp from '../LevelUp/LevelUp';
import HexagonArea from './../HexagonArea/HexagonArea';
import ReactNotification from "react-notifications-component";
import '../../../node_modules/react-notifications-component/dist/theme.css';


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
      showHex: true
    };
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
    console.log(this.props.theme)
    
  }

  addNotification() {

    //heading
    var today = new Date('2019-06-15');
    var heading = "Notice of Next Meeting";
    
    //check
    var check = "1";

    var dates = [new Date('2019-05-31'), new Date('2019-06-14'), new Date('2019-07-04'), new Date('2019-07-05')
    ,new Date('2019-07-19') ,new Date('2019-08-01') ,new Date('2019-08-02')]

    for(var i=0;i<dates.length;i++) {
      
      if(today<=dates[i]) {
        check = ("Your next grad program meeting is on the "+String(dates[i].toUTCString()));
        i = dates.length;
      }
      else{
        check = String(dates[i].toUTCString());
      }
    }

    //load dates

    this.notificationDOMRef.current.addNotification({
      
      title: heading,
      message: check,
      type: "info",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 10000 },
      dismissable: { click: true }
    });
  }

  liftStateUp=(data)=>{
    this.setState({showHex:data});
  }

  getHexagon(){
     if(this.state.showHex){
       return (this.props.hex);
     }
  }

  render() {
    return(
      <div>
        <div>
      <div>
      <Link to="/levelUp"><HexagonArea hex={this.getHexagon()} name= {"Graduate Track"} colour={this.props.colour}/></Link>    
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>  
      </div>
      <Route
              path='/about'
                render={(props) => <About {...props}  theme={this.props.theme}/>}
              />
      <Route
              path='/levelUp'
                render={(props) => <LevelUp {...props} liftStateUp={this.liftStateUp} hex={this.props.hex} showHex={true}  theme={this.props.theme} colour={this.props.colour}/>}
              />        
  </div>
  
      <br/>

    <div className="app-content" >
      <ReactNotification ref={this.notificationDOMRef} />
      <button onClick={this.addNotification} className="btn btn-primary" id = "btnHomeNotice">
        Latest Events Update Notification
      </button>
    </div>

<div class="clearfix">
<p id="heroQuote"><br></br>
{/* <img id="imageHeroLeft" src={HeroJourneyImage} alt="The hero journey to the start of the course"/>  */}
<h1 id="homeHeader">Schedule 2019</h1>
            List of events that will occur for the 2019 schedule, please see below for the following date and time of occurance.
            Languages that will be learnt is C#, Java, Design, Web and Databases.
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<h2 id="homeHeader">C#</h2>
  
C# is a primary language at BBD as well as a fundamental language when Object
Oriented languages are considered. The Level-Up content includes exposure the 
language fundamentals and frameworks, such as .Net Core 
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<h2 id="homeHeader">Java</h2>
Java is a primary language at BBD as well as a fundamental language when Object
Oriented languages are considered. The Level-Up content includes exposure the 
language fundamentals and frameworks, such as Spring 
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<h2 id="homeHeader">Web</h2>
Web, especially JavaScript, has become a core language in BBD and has certainly proven 
itself as a first-class citizen programming language for enterprise system development. 
As such, web incorporates an exposure to HTML, CSS, JavaScript as well as certain 
JavaScript frameworks such as Angular 
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<h2 id="homeHeader">Design</h2>
Design extends a grad’s understanding of Object-Oriented programming and introduces 
design concepts such as design patterns. Additional design concepts are incorporated to 
provide a well-rounded understanding of the importance of design, such as service 
design and a high-level overview of architectural principles 
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<h2 id="homeHeader">Databases</h2>
Database knowledge remains core to BBD project teams and even though non-relational 
databases are gaining popularity, relational databases are still considered a primary 
approach to persist data within the BBD client space. As such, the database Level-Up 
Quest focuses on relational databases with a specific focus on database design 
</p>
</div>
<hr/>
<div class="clearfix">
<p id="heroQuote">
<h2 id="homeHeader">Date Schedule:</h2>
<h3>Begin: 1st March 2019 -  C#</h3>
<ul>
  <li class="grow">
    1st March 2019 Grads at BBD from 12:00 to 16:30.
</li>
<li class="grow">
    15th March 2019 Grads at BBD from 12:00 to 16:30.
</li>
<li class="grow">
    1st April 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    2nd April 2019 Grads at BBD from 08:30 to 16:30.
</li>
</ul>
</p>
<hr/>
<p id="heroQuote">
<h3>Begin: 2nd April 2019 -  Java</h3>
<ul>
  <li class="grow">
    2nd April 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    18th April 2019 Grads at BBD from 12:00 to 16:30.
</li>
<li class="grow">
    2nd May 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    3rd May 2019 Grads at BBD from 08:30 to 16:30.
</li>
</ul>
</p>
<hr/>
<p id="heroQuote">
<h3>Begin: 3rd May 2019 -  Web</h3>
<ul>
  <li class="grow">
    3rd May 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow"> 
    17th May 2019 Grads at BBD from 12:00 to 16:30.
</li>
<li class="grow">
    30th May 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    31st May 2019 Grads at BBD from 08:30 to 16:30.
</li>
</ul>
</p>
<hr/>
<p id="heroQuote">
<h3>Begin: 31st May 2019 -  Design</h3>
<ul>
  <li class="grow">
    31st May 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    14th June 2019 Grads at BBD from 12:00 to 16:30.
</li>
<li class="grow">
    4th July 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    5th July 2019 Grads at BBD from 08:30 to 16:30.
</li>
</ul>
</p>
<hr/>
<p id="heroQuote">
<h3>Begin: 5th July 2019 -  Database</h3>
<ul>
  <li class="grow">
    5th July 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    19th July 2019 Grads at BBD from 12:00 to 16:30.
</li>
<li class="grow">
    1st August 2019 Grads at BBD from 08:30 to 16:30.
</li>
<li class="grow">
    2nd August 2019 Grads at BBD from 08:30 to 16:30.
</li>
</ul>
</p>
<br/>
</div>
     
    </div>
    );
  }
}
// const HomePropTypes = {
//  // always use prop types!
// };
// Home.propTypes = HomePropTypes;
export default Home;

