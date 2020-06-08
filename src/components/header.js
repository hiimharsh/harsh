import React from 'react'
import propTypes from 'prop-types'
import '../assets/css/header.css'

class Header extends React.Component {

    componentDidMount () {
        var prevScrollpos = window.pageYOffset;
        var toScroll = true;
        window.onresize = event => {
            if (document.body.clientWidth <= 370) {
                toScroll = false;
            } else {
                toScroll = true;
            }
        }
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (toScroll) {
                if (prevScrollpos > currentScrollPos) {
                    document.getElementsByTagName("header")[0].style.top = "0";
                } else {
                    document.getElementsByTagName("header")[0].style.top = "-80px";
                }
            }
            prevScrollpos = currentScrollPos;
        }
    }

    render () {
        return (
            <header>
                <div id="header" className="header">
                    <div className="logo">
                        <h3><a href="/">Hi/Im/Harsh</a></h3>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#experience">Experience</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    text: propTypes.string
}

Header.defaultProps = {
    text: "Hi/Im/Harsh"
}

export default Header