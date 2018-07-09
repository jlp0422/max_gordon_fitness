/* eslint-disable */
import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={ Nav } />
      </Router>
    )
  }
}

export default App;
