import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="social-links">
                    <ul>
                        <li><a href="https://twitter.com/hiimharsh/" target="_blank" className="twitter" title="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                        <li><a href="https://hiimharsh.tumblr.com/" target="_blank" className="tumblr" title="Tumblr"><FontAwesomeIcon icon={['fab', 'tumblr']}/></a></li>
                        <li><a href="https://instagram.com/hiimharsh/" target="_blank" className="instagram" title="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                        <li><a href="https://snapchat.com/add/hiimharsh/" target="_blank" className="snapchat" title="Snapchat"><FontAwesomeIcon icon={['fab', 'snapchat-ghost']}/></a></li>
                        <li><a href="https://github.com/hiimharsh/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} title="Github"/></a></li>
                        <li><a href="mailto:harshthakkar46@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} title="Mail"/></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>Harsh Thakkar &copy; 2015 - {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}
