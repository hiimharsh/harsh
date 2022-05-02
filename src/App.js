import React, { Component } from 'react';
import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import Footer from './components/footer';
import Work from './components/work';
import Experience from './components/experience';
import Skills from './components/skills';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      planet: 'Sun',
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  toggleVisibility() {
    if (window.pageYOffset > 500) this.setState({ isVisible: true });
    else this.setState({ isVisible: false });
  }

  setTheme(planet) {
    console.log(planet);
    this.setState({ planet });
  }

  render() {
    const { isVisible, planet } = this.state;

    return (
      <div className="main">
        <Header
          title={'Harsh Thakkar'}
          setTheme={this.setTheme.bind(this)} />
        <Banner planet={planet} />
        <Work />
        <Experience />
        <Skills />
        <Footer />
        {isVisible && (
          <div className="scroll-to-top" onClick={() => this.scrollToTop()}>↑</div>
        )}
      </div>
    );
  }
}

export default App;
