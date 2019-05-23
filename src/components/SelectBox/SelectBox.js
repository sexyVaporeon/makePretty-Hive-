import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SelectBox.css';
class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.props.options[0],
            isSelectOpen: false
        };
    }

    handleOpen = () => {
        this.setState(prevState => ({
            isSelectOpen: !prevState.isSelectOpen
        }));
    };

    handleSelectOption = (option) => {
        this.setState({
            selectedOption: option}
        );
    };

    render() {
        const options = this.props.options.map((option, i) =>
            <div key={ `option-${i}` } className="select__option" onClick={()=>this.handleSelectOption(option)}>{option}</div>
        );

        const classes = ['select'];
        if(this.props.borderless)
            classes.push('select--borderless');
        if(this.props.half)
            classes.push('select--half');
        if(this.state.isSelectOpen)
            classes.push('select--open');

        return (
            <div onClick={this.handleOpen} className={classes.join(' ')}>
                <div className="select__selected"><b className="select__label">{this.props.label}</b> {this.state.selectedOption}</div>
                <div  className="select__box">
                    {options}
                </div>
            </div>
        );
    }
}

SelectBox.propTypes = {
    selectedOption: PropTypes.string.isRequired,
    isSelectOpen: PropTypes.string,
    options: PropTypes.array.isRequired,
    extra: PropTypes.string
};

export default SelectBox;