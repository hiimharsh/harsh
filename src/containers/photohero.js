import React, { Component } from 'react'
import { Power3, TimelineLite } from 'gsap';
import '../assets/css/photography/photography.css'

export default class Photohero extends Component {
    lineOneRef = null
    lineTwoRef = null
    lineThreeRef = null

    componentDidMount () {
        let { lineOneRef, lineTwoRef, lineThreeRef } = this;
        let tl = new TimelineLite();
        setTimeout(() => {
            tl.staggerFrom([lineOneRef, lineTwoRef, lineThreeRef], 1, {
                y: 150,
                ease: Power3.easeOut,
                delay: 0.5
            }, 0.2);
        }, 500);
    }

    render() {
        return (
            <div className="hero">
                <div className="hero-container">
                    <div className="line-box">
                        <h3 ref={el => this.lineOneRef = el}>Harsh Thakkar is a</h3>
                    </div>
                    <div className="line-box">
                        <h3 ref={el => this.lineTwoRef = el}>travel &amp; adventure</h3>
                    </div>
                    <div className="line-box">
                        <h3 ref={el => this.lineThreeRef = el}>photographer</h3>
                    </div>
                    <div className="layer"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="rgb(238, 249, 254)" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,229.3C480,245,600,235,720,218.7C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        )
    }
}
