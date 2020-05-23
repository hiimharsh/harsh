import React from 'react'
import propTypes from 'prop-types'
import '../App.css'

const Header = props => {
    return (
        <header>
            <div className="logo">
                <h3>Hi/Im/Harsh</h3>
            </div>
        </header>
    )
}

Header.propTypes = {
    text: propTypes.string
}

Header.defaultProps = {
    text: "Hi/Im/Harsh"
}

export default Header