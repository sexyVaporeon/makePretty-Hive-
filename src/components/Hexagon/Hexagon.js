import React, {Component} from 'react';
import style from './Hexagon.css';

class Hexagon extends Component{
    constructor(props){
        super(props);

    }

    render(){
        console.log(this.props.type)
        return(
            <div class="hexagon">
                <div class= {this.props.type}></div>
            </div>
        );
    }
}

export default Hexagon;