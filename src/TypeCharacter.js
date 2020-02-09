import React, { Component } from 'react';
import './TypeCharacter.css';

class TypeCharacter extends Component {
    render() {
        let classn = 'typedChar';
        if (this.props.active) {
            classn += ' current';
        }
        else if (this.props.correct === true) {
            classn += ' right halfFaded';
        }
        else if (this.props.correct === false) {
            classn += ' wrong halfFaded';
        }
        else {
            classn += ' quartFaded';
        }
        const letter = (this.props.letter === ' ') ? '•' : this.props.letter;
        return(
            <span className={classn}>{letter}</span>
        );
    }
}

export default TypeCharacter;
