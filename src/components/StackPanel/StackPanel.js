import React, {Component} from 'react';
import style from './StackPanel.css';

class StackPanel extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    classJoiner = (orientation, horizontalAlignment,  verticalAlignment, spacing) =>{
        const classes = ['flex'];
            let orientation_switch = false;

            switch (orientation) {
                case "vertical":
                    orientation_switch = true;
                    classes.push(style['vertical']);
                    break;
                case "horizontal":
                    classes.push(style['horizontal']);
                    break;
                default:
                    classes.push(style['vertical']);
                    break;
            }

            let center_y = orientation_switch? style['center-x'] : style['center-y'];
            let top_y = orientation_switch ? style['right-x'] : style['bottom-y'];
            let bottom_y = orientation_switch ? style['left-x'] : style['top-y'];
            let center_x = orientation_switch ? style['center-y'] : style['center-x']  ;
            let left_x = orientation_switch ? style['bottom-y'] : style['right-x'];
            let right_x = orientation_switch ? style['top-y'] : style['left-x'];

            switch (verticalAlignment) {
                case "center":
                    classes.push(center_y);
                    break;
                case "top":
                    classes.push(top_y);
                    break;
                case "bottom":
                    classes.push(bottom_y);
                    break;
                default:
                    classes.push(center_y);
                    break;
            }
            switch (horizontalAlignment) {
                case "center":
                    classes. push(center_x);
                    break;
                case "left":
                    classes.push(left_x);
                    break;
                case "right":
                    classes.push(right_x);
                    break;
                default:
                    classes.push(center_x);
                    break;
            }

            if (spacing == "even") {
                classes.push(style['space-between']);
            }

            return classes.join(' ');
        }

        wrapChildren = (children) => {
            const formattedChildren = [];

            let children_arr = [];
            children.length ? children_arr = [...children] : children_arr.push(children);

            for ( let i = 0; i < children_arr.length; i++ ) {
                formattedChildren.push(
                  <div key={i}>
                    {children_arr[i]}
                  </div>
                );
            }

            return formattedChildren;
        }

        render()
        {
            return (
                    <div style={{padding: this.props.padding}} className={this.classJoiner(this.props.orientation, this.props.horizontalAlignment, this.props.verticalAlignment, this.props.spacing)}>
                        {this.wrapChildren(this.props.children)}
                    </div>
            );
        }

}

export default StackPanel;