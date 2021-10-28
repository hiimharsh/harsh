import React from 'react'
import propTypes from 'prop-types'
import '../assets/css/header.css'
// import profileImage from '../assets/images/profile.jpg'
import sunIcon from '../assets/images/planets/sun.png'
import moonIcon from '../assets/images/planets/moon.png'

const planets = [
    {
        name: 'Sun',
        icon: sunIcon
    },
    {
        name: 'Moon',
        icon: moonIcon
    },
];

class Header extends React.Component {

    state = {
        planet: null,
        planetIcon: null,
        dropdownOpen: false,
        planets: planets
    }

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
        this.setTheme();        
    }

    setTheme = () => {
        let planet = localStorage.getItem('planet');
        if (!planet) {
            planet = 'Sun';
            localStorage.setItem('planet', planet);
        }
        this.changeTheme(planet);
        let planetIcon = planets.filter(p => p.name === planet)[0].icon;
        this.setState({ planet, planetIcon });
    }

    toggleDropdown = () => {
        let { dropdownOpen } = this.state;
        this.setState({ dropdownOpen: !dropdownOpen });
    }

    changeTheme = planet => {
        if (!planet) { planet = 'Sun'; }
        let htmlTag = document.getElementsByTagName('html')[0];
        htmlTag.setAttribute('data-theme', planet);
        localStorage.setItem('planet', planet);
        let planetIcon = planets.filter(p => p.name === planet)[0].icon;
        this.setState({ planet, planetIcon, dropdownOpen: false });
    }

    render () {
        return (
            <header>
                <div id="header" className="header">
                    <div className="logo">
                        {/* <div className="profile-image">
                            <a href="/harsh">
                                <img src={profileImage} alt="Harsh" />
                            </a>
                        </div> */}
                        <h3><a href="/harsh">{this.props.title}</a></h3>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#experiences">Experience</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <div className="planet-icon" onClick={this.toggleDropdown}>
                                    <img src={this.state.planetIcon ? this.state.planetIcon : null} title={this.state.planet} alt={this.state.planet} />
                                    {
                                        this.state.dropdownOpen ?
                                        <div className="planet-dropdown">
                                            <ul>
                                                {
                                                    planets.map((p, i) => (
                                                        <li key={i} onClick={this.changeTheme.bind(this, p.name)}>
                                                            <div className="planet-icon">
                                                                <img src={p.icon} alt={p.name} />
                                                            </div>
                                                            <span>{p.name}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div> : null
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    title: propTypes.string
}

Header.defaultProps = {
    title: "Hi Im Harsh"
}

export default Header