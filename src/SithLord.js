import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from './ReactActions';

class SithLord extends Component {
    handleEdit = (event) => {
        this.props.editAction(this.props);
    }
    handleDelete = (event) => {
        this.props.deleteAction(this.props);
    }
    render() {
        const { name, rank, skillLevel } = this.props;
        return(
            <li>{name} is a {rank} level Sith lord with lightsaber skill rating of {skillLevel} <button onClick={this.handleEdit}>Edit</button> <button onClick={this.handleDelete}>Remove</button></li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAction: (props) => dispatch(actions.REMOVE_SITH(props))
    }
};

export default connect(null, mapDispatchToProps)(SithLord);
