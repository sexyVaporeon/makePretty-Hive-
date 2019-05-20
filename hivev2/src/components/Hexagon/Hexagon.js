import React, {Component} from 'react';
import style from './Hexagon.css';

class Hexagon extends Component{
    constructor(props){
        super(props);
        this.state={
            type:props.type
        };
    }

    render(){
        return(
            <div class="hexagon">
                <div class= {this.state.type}></div>
            </div>
        );
    }
}

export default Hexagon;