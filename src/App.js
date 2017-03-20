import React, { Component,PropTypes } from 'react';

import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css'
import {Main} from './Main.js'

class App extends Component {
  render() {
    return (
      <div>
          <Main />
      </div>
    );
  }
}

export default App;
