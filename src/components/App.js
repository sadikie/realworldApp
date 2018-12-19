import React, { Component } from 'react';
import './App.css';
import Header from './Header';

import { connect } from 'react-redux';
import Home from './Home/index';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header appName={this.props.appName} />
        <Home />
        
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}) )(App);
