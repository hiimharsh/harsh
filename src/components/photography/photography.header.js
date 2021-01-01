import React from 'react'

const PhotographyHeader = props => {
    return (
        <header className="photography-header">
            <p><a href="/harsh/photography">Harsh Thakkar</a></p>
            <nav>
                <ul>
                    <li>
                        <a href="/harsh/photography/about" className={window.location.pathname.includes('photography/about') ? ' underline' : ''}>About</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/hiimharsh" target="_blank">Instagram</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default PhotographyHeader;