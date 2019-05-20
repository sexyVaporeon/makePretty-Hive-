import React, {Component} from 'react';
import style from './Hexagon.css';

class Hexagon extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div class="hexagon">
                <img></img>
            </div>
        );
    }
}

export default Hexagon;