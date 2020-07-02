import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Work from './components/work';
import Experience from './components/experience';
import Skills from './components/skills';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Work />
        <Experience />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
