import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Specialize from './components/specialize';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Banner />
        <Specialize />
      </div>
    );
  }
}

export default App;
