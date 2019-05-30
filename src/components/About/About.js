import React, {Component} from 'react';
import HeroJourneyImage from "../../Themes/Default/Hero-removebg[2044].png";
import AdventureImage from "../../Themes/Default/adventure_removebg.png";
import SideQuestImage from "../../Themes/Default/sideQuest-removebg[2045].png";
import LevelUpImage from "../../Themes/Default/Elf-removebg[2043].png";
//Pokemon images
import Bulbasaur from "../../Themes/Pokemon/1.jpg";
import Charmandar from "../../Themes/Pokemon/2.jpg";
import Squirtle from "../../Themes/Pokemon/3.jpg";
import Eevee from "../../Themes/Pokemon/4.png";
//Spongebob images
import MrKrabs from "../../Themes/SpongeBob/MrKrabs.png";
import Patrick from "../../Themes/SpongeBob/patrick.png";
import Sandy from "../../Themes/SpongeBob/spongebob.png";
import Squidward from "../../Themes/SpongeBob/squidward.png";
//Avengers images
import Hawkeye from "../../Themes/Avengers/Hawkeye.png";
import Loki from "../../Themes/Avengers/loki.png";
import Thanos from "../../Themes/Avengers/thanos.png";   
import Scarlet from "../../Themes/Avengers/scarlet.png";                                     


// const Home = props => (
// 	<div>This is a component called Home.</div>
// );

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
class About extends Component {
  constructor(props){
    super(props);
    console.log(this.props.theme);
  }

  getImageHero(){
    if(this.props.theme=="Pokemon"){
        return(Bulbasaur);
    } 
    else if(this.props.theme =="Spongebob"){
      return(Patrick);
    }else if(this.props.theme == "Avengers"){
      return(Hawkeye);
    }
    return (HeroJourneyImage);
  }

  getImageAdventure(){
    if(this.props.theme=="Pokemon"){
      return(Charmandar);
  } 
  else if(this.props.theme =="Spongebob"){
    return(Sandy);
  }else if(this.props.theme == "Avengers"){
    return(Loki);
  }
  return (AdventureImage);
  }

  getLevelUpImage(){
    if(this.props.theme=="Pokemon"){
      return(Squirtle);
  } 
  else if(this.props.theme =="Spongebob"){
    return(MrKrabs);
  }else if(this.props.theme == "Avengers"){
    return(Thanos);
  }
  return (LevelUpImage);
  }

  getSideQuestImage(){
    if(this.props.theme=="Pokemon"){
      return(Eevee);
  } 
  else if(this.props.theme =="Spongebob"){
    return(Squidward);
  } else if(this.props.theme =="Avengers"){
    return(Scarlet);
  }
  return (SideQuestImage);
  }

  render() {
    return (<div>
<div class="clearfix">
<p id="heroQuote">
<img id="imageHeroLeft" src={this.getImageHero()} alt="The hero journey to the start of the course"/>
<h1 id="heroHeader">Hero Journey</h1>
            BBD’s Continuous Learning Programme (CLP) that has been gamified 
            for ultimate learning and engagement. The Programme consists of 
            two tracks; Adventure and Level Up. These two tracks run in parallel 
            throughout the year and you can partake in both simultaneously. 
            Keeping yourself on top of your game is your responsibility, but we are 
            here to support, encourage and mentor you along your journey to 
            become your own hero.
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<img id="imageHeroRight" src={this.getImageAdventure()} alt="Continous learning knowledge journey that will be travelled" /> 
<h2 id="heroHeader">Adventure</h2>
            Tackle the Adventure Quests to build your knowledge and follow the path 
            of the Masters in this personalised continuous learning journey. Work 
            through the three quest stages with the help of enlightened mission 
            commanders.
</p>
</div>
<div class="clearfix">
<p id="heroQuote">
<img id="imageHeroLeft" src={this.getLevelUpImage()} alt="Continous learning knowledge journey that will be travelled"/> 
<h2 id="heroHeader">Level up</h2>
                Unlock achievements, earn points and raise through the ranks to prove 
                your skill, adaptability and knowledge. Complete the 9 core tasks in 
                a mix of single- and multi-player modes.
</p>
</div>     

<div class="clearfix">
<p id="heroQuote">
 <img id="imageHeroRight" src={this.getSideQuestImage()} alt="Continous learning knowledge journey that will be travelled"/> 
<h2 id="heroHeader">Side Quest</h2>
                No hero’s journey is complete without side quests to fuel your ranking, 
                prove your skill, share your wisdom and earn respect as someone who 
                knows things worth knowing. There are four side quest categories.
</p>
</div> 
<div class="clearfix">
<p id="heroQuote">
 {/* <img id="imageHeroLeft" src={SideQuestImage} alt="Continous learning knowledge journey that will be travelled"/>  */}
<h2 id="heroHeader">Quest log</h2>
                Record your meta-story and define your character arc throughout your 
                journey to become your own learning hero. Keep track of your 
                achievements, rewards, goals, touchpoints and the wisdom you gain 
                along the way.
</p>
</div> 
    </div>);
  }
}

// const HomePropTypes = {
// 	// always use prop types!
// };

// Home.propTypes = HomePropTypes;

export default About;
