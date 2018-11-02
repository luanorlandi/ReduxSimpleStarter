import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

import SearchBar from '../container/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div><SearchBar /></div>
    );
  }
}
