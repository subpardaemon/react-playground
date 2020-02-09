import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './ReactActions';

class Cutoff extends Component {
    handleInputChange = (event) => {
        if (event.target.value) this.props.cutoffAction(parseInt(event.target.value));
    }
    render() {
        return(
            <input type="number" onChange={this.handleInputChange} value={this.props.minSkill} />
        )
    }
}

const mapStateToProps = (state, origProps) => {
    return {
        ...origProps,
        minSkill: state.cutoff
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        cutoffAction: (newCutoff) => dispatch(actions.UPDATE_SKILL_FILTER(newCutoff))
    }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Cutoff);
