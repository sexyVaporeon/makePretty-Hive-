import React from 'react';
import './HexagonArea.css';

class HexagonArea extends React.Component {

    constructor(props){
      super(props);
      this.state={
        showHex:true
      }
    }
  
    getHexagon(){
      if(this.state.showHex){
        return (this.props.hex);
      }
   }
  
    render = () => {
  
      return (
        <div class = "sized"  style={{color: this.props.colour}}>
          {this.getHexagon()}
        <div class = "hexagonText">
          {this.props.name}
        </div>
          
        </div>
        );
    }
  }

export default HexagonArea;