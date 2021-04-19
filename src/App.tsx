import React, { Component } from 'react';
import './App.css';

import { Navigation } from './app/common/';

export interface IAppProps {}

export interface IAppState {}

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <div className='app'>
        <Navigation />
      </div>
    );
  }
}

export default App;
