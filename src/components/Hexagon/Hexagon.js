import React, {Component} from 'react';
import './Hexagon.css';

class Hexagon extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div class="hexagon">
                <div class= {this.props.type}></div>
            </div>
        );
    }
}

export default Hexagon;