import React from 'react'
import { FaTwitter, FaTumblr, FaInstagram, FaSnapchatGhost, FaGithubAlt, FaEnvelope } from 'react-icons/fa'
import '../assets/css/footer.scss'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="social-links">
                    <ul>
                        <li><a href="http://twitter.com/hiimharsh/" target="_blank" className="twitter" title="Twitter"><FaTwitter size={24}/></a></li>
                        <li><a href="http://hiimharsh.tumblr.com/" target="_blank" className="tumblr" title="Tumblr"><FaTumblr size={24}/></a></li>
                        <li><a href="http://instagram.com/hiimharsh/" target="_blank" className="instagram" title="Instagram"><FaInstagram size={24}/></a></li>
                        <li><a href="http://snapchat.com/add/hiimharsh/" target="_blank" className="snapchat" title="Snapchat"><FaSnapchatGhost size={24}/></a></li>
                        <li><a href="http://github.com/hiimharsh/" target="_blank"><FaGithubAlt size={26} title="Github"/></a></li>
                        <li><a href="mailto:harshthakkar46@gmail.com" target="_blank"><FaEnvelope size={24} title="Mail"/></a></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>
                        <a href="https://hiimharsh.github.io/harsh/">Harsh Thakkar</a> &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
