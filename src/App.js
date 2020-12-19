import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Work from './components/work';
import Experience from './components/experience';
import Skills from './components/skills';
import SmoothScroll from './containers/smoothscroll';

library.add(fab)

class App extends Component {
  render() {
    return (
      <SmoothScroll>
        <Header title={'Hi Im Harsh'} />
        <Banner />
        <Work />
        <Experience />
        <Skills />
        <Footer />
      </SmoothScroll>
    );
  }
}

export default App;
