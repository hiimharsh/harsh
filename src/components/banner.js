import React from 'react'
import '../assets/css/banner.css'

const Banner = props => {
    return (
        <section className="banner">
            <main>
                <p>Software Engineer at Whitecrow Research</p>
                <p>Founder of Travelitinerary</p>
                <p>Part-time FPS Gamer</p>
            </main>
            <div className="name">
                {/* <h1>Hey, I'm Harsh</h1> */}
                <p>Hi, I'm Harsh Thakkar. I'm a Full Stack Web &amp; Mobile App Developer, currently working at Whitecrow Research in Mumbai.</p>
            </div>
            {/* <div className="available">
                Available for Discussion
            </div> */}
        </section>
    )
}

export default Banner