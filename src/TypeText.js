import React, { Component } from 'react';
import TypeCharacter from './TypeCharacter';

class TypeText extends Component {
    state = {
        letters: []
    }
    render() {
        const { text, currentPos, rights, wrongs } = this.props;
        const currentPosAsNumber = parseInt(currentPos);
        const textToChars = text.split('');
        const textItems = [];
        for(let i = 0; i < textToChars.length; i++) {
            let isCorrect = null;
            if (rights.includes(i)) {
                isCorrect = true;
            }
            else if (wrongs.includes(i)) {
                isCorrect = false;
            }
            const itemProps = {
                letter: textToChars[i],
                active: (i === currentPosAsNumber),
                correct: isCorrect
            };
            const itemKey = 'TC' + i.toString();
            textItems.push(<TypeCharacter { ...itemProps } key={itemKey} />);
        }
        return(
            <div className="typing-text">
                {textItems}
            </div>
        );
    }
}

export default TypeText;
