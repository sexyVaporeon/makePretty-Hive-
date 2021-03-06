import React, { Component } from 'react';

import './SelectBox.css';
class SelectBox extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem("theme") === null){
        this.state = {
            selectedOption: this.props.options[0],
            isSelectOpen: false,
        };
    }
    else {
        this.state = {
            selectedOption: localStorage.getItem('theme'),
            isSelectOpen: false,
        };
    }
    }

    handleOpen = () => {
        this.setState(prevState => ({
            isSelectOpen: !prevState.isSelectOpen
        }));
    };

    handleClose = () => {
        this.setState(prevState => ({
            isSelectOpen: false,
        }));
    };

    handleSelectOption = (option) => {
        this.setState({
            selectedOption: option}
        );
        this.props.liftStateUp(option);
    };


    render() {
        let options = this.props.options.map((option, i) =>
            <div key={ `option-${i}` } className="select__option" onClick={()=>this.handleSelectOption(option)}>{option}
            </div>
        );

        let classes = ['select'];
        if(this.props.borderless)
            classes.push('select--borderless');
        if(this.props.half)
            classes.push('select--half');
        if(this.state.isSelectOpen)
            classes.push('select--open');

        return (
            <div onMouseEnter={this.handleOpen}  onMouseLeave ={this.handleClose} className={classes.join(' ')} >
                <div className="select__selected"><b className="select__label">{this.props.label}</b> {this.state.selectedOption}</div>
                <div  className="select__box">
                    {options}
                </div>
            </div>
        );
    }
}


export default SelectBox;