import React, { Component } from 'react';
import Siths from './Siths';
import SithForm from './SithForm';
import Cutoff from './Cutoff';

class SithMasters extends Component {
  editSith = (actionProps) => {
    this.refs.sithForm.startEditing(actionProps);
  }
  render() {
    return(
      <div className="page-sithMasters">
        <h1>All hail the Sith Lords! Now sith down!</h1>
        <Cutoff />
        <Siths title="Whatever" editAction={this.editSith} />
        <hr/>
        <SithForm ref="sithForm" />
      </div>
    )
  }
}

export default SithMasters;
