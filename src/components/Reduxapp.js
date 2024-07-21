import React from "react";
import * as ReduxappActions from '../actions/ReduxappActions';
 
export default class Reduxapp extends React.Component {
 
    render() {
        return (
            <li>
                <span>{this.props.text}</span>
                <button onClick={() => ReduxappActions
                    .deleteReduxapp(this.props.id)}>delete</button>
            </li>
 
        );
    }
}