import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return (
        <nav>
            {/* <div className="nav--div"> */}
            <FontAwesomeIcon icon={faEarthEurope} className="nav--logo" size="2x"/><span className="white">
            my travel blog</span>
            {/* </div> */}
        </nav>
    )
}

