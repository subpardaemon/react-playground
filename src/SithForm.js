import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './ReactActions';

class SithForm extends Component {
    state = {
        uid: '',
        name: '',
        rank: '',
        skillLevel: ''
    }
    /**
     * This will be used from outside, therefore we need the forwardRef: true option in the connect() below.
     */
    startEditing = (data) => {
        this.setState(data);
    }
    handleChange = (event) => {
        if (event.target.name && event.target.value) {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.name !== '' && this.state.rank !== '' && this.state.skillLevel !== '') {
            this.props.updateAction({ ...this.state });
        }
        this.setState({
            uid: '',
            name: '',
            rank: '',
            skillLevel: ''
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} /><br/>
                <input name="rank" placeholder="rank" onChange={this.handleChange} value={this.state.rank} /><br/>
                <input name="skillLevel" placeholder="skillLevel" type="number" step="0.2" value={this.state.skillLevel} onChange={this.handleChange} /><br/>
                <input type="submit"/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAction: (props) => dispatch(actions.UPDATE_SITH(props)),
    }
};

/**
 * forwardRef option is necessary here as we're using a method in this class from the outside.
 * Unless the ref(erence) is forwarded to this actual component (which will be wrapped in the react-redux HOC),
 * this method would be unavailable to the component that uses it.
 */
export default connect(null, mapDispatchToProps, null, { forwardRef: true })(SithForm);
