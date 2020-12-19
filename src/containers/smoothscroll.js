import React from "react";
import { TweenLite, Power4 } from "gsap";
import ResizeObserver from 'resize-observer-polyfill';

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight
  };

  ro = new ResizeObserver(elements => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height
      });
    }
  });

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.ro.observe(this.viewport);
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="viewport" ref={ref => (this.viewport = ref)}>
          {this.props.children}
        </div>
        {/* <div
          ref={ref => (this.fake = ref)}
          style={{
            height: this.state.height
          }}
        /> */}
      </React.Fragment>
    );
  }
}