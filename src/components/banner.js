import React from 'react'
import '../assets/css/banner.scss'

const Banner = () => {
    return (
        <section className="banner">
            <div className="name">
                <h1>Hey, I'm Harsh 👋</h1>
                <p>I'm a Full Stack Web App // Mobile App Developer at Whitecrow Research in Mumbai</p>
                {/* <p className="learnmore">Learn more about me →</p> */}
            </div>
            <a href="mailto:harshthakkar46@gmail.com" className="available">
                {/* Available for Discussion */}
                Get In Touch
            </a>
        </section>
    )
}

export default Banner