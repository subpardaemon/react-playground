import React, { Component } from 'react';
import TypeText from './TypeText';

class TypeManager extends Component {
    state = {
        listening: false,
        currentPos: 0,
        rights: [],
        wrongs: [],
        practiceText: ''
    }
    setPractice(text) {
        this.setState({
            practiceText: text,
            currentPos: 0,
            rights: [],
            wrongs: [],
            listening: true
        });
        console.log('starting type exercise');
    }
    startTyping() {
        this.state.setState({ listening: true });
        // maybe start a timer?
    }
    stopTyping() {
        this.state.setState({ listening: false });
        // maybe stop a timer?
    }
    typeListener = (event) => {
        if (this.state.listening) {
            if (event.key) {
                if (event.key.length === 1) {
                    event.preventDefault();
                    const rights = [...this.state.rights];
                    const wrongs = [...this.state.wrongs];
                    let listening = true;
                    if (event.key === this.state.practiceText[this.state.currentPos]) {
                        rights.push(this.state.currentPos);
                    } else {
                        wrongs.push(this.state.currentPos);
                    }
                    const currentPos = this.state.currentPos + 1;
                    if (currentPos >= this.state.practiceText.length) {
                        listening = false;
                    }
                    this.setState({
                        currentPos,
                        rights,
                        wrongs,
                        listening
                    });
                    if (listening === false && this.props.finishedAction) {
                        this.props.finishedAction({ rights, wrongs });
                    }
                }
            }
        }
    }
    componentDidMount() {
        document.body.addEventListener('keyup', this.typeListener);
    }
    componentWillUnmount() {
        document.body.removeEventListener('keyup', this.typeListener);
    }
    render() {
        return(
            <div>
                <TypeText text={this.state.practiceText} currentPos={this.state.currentPos} rights={this.state.rights} wrongs={this.state.wrongs} />
            </div>
        )
    }
}

export default TypeManager;
