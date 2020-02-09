import React, { Component } from 'react';
import SithMasters from './SithMasters';
import Welcome from './Welcome';
import Navigator from './Navigator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TypeManager from './TypeManager';

class App extends Component {
  startTyping = (event) => {
    event.target.blur();
    this.refs.typeMan.setPractice("The quick brown fox jumps over the lazy dog.");
  }
  finishedTyping = (data) => {
    if (data.rights && data.wrongs) {
      console.log('typing is done, got', data.rights.length, 'right,', data.wrongs.length, 'wrong.');
    }
  }
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route path="/sithlords" exact component={SithMasters} />
            <Route path="/" exact component={Welcome} />
          </Switch>
        </div>
        <TypeManager ref="typeMan" finishedAction={this.finishedTyping} /> 
        <button onClick={this.startTyping}>Start Typing Exercise</button>
      </BrowserRouter>
    )
  }
}

export default App;
