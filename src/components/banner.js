import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Banner = props => {
    return (
        <section className="banner">
            <div className="name">
                <h2>Harsh Thakkar</h2>
                <p>Full Stack Web // App Developer</p>
            </div>
            <div className="social-links">
                <ul>
                    <li><a href="http://twitter.com/hiimharsh/" target="_blank" className="twitter" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                    <li><a href="http://hiimharsh.tumblr.com/" target="_blank" className="tumblr" title="Tumblr"><FontAwesomeIcon icon={['fab', 'tumblr']}/></a></li>
                    <li><a href="http://instagram.com/hiimharsh/" target="_blank" className="instagram" title="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                    <li><a href="http://snapchat.com/add/hiimharsh/" target="_blank" className="snapchat" title="Snapchat"><FontAwesomeIcon icon={['fab', 'snapchat-ghost']}/></a></li>
                    <li><a href="http://github.com/hiimharsh/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} title="Github"/></a></li>
                    <li><a href="mailto:harshthakkar46@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} title="Mail"/></a></li>
                </ul>
            </div>
            <div className="circle">
                <svg height="200" width="200">
                    <circle cx="100" cy="100" r="100" fill="#ff2f2f" />
                </svg>
            </div>
        </section>
    )
}

export default Banner