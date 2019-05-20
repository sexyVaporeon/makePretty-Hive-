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
                <div class="hexTop"></div>
                <div class="hexBottom"></div>
            </div>
        );
    }
}

export default Hexagon;