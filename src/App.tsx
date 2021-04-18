import React, { Component } from 'react';
import './App.css';

import PersonList from './modules/PersonList/PersonList';

export interface IAppProps {}

export interface IAppState {
  persons: string[];
}

class App extends Component<IAppProps, IAppState> {
  state = {
    persons: [],
  };
  render() {
    const { persons } = this.state;
    return (
      <div className='app'>
        <PersonList persons={persons} />
      </div>
    );
  }
}

export default App;
