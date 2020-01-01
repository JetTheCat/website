import React from "react"
import { Link } from "react-router-dom"
import links from "./link.js"
import navLogo from "../../img/nav-logo.png"
import "../../css/global/Nav.css"

class NavDesktop extends React.Component {

    scrollTop() {
        window.scrollTo(0,0)
    }

    render() {
        const list = links.map(obj => <Link key={obj.id} to={obj.link} 
            onClick={this.scrollTop} className="nav-desktop">{obj.description}</Link>)
        return (
            <div id="navbar" className="mainNav">
                <img src={navLogo} alt="logo" className="navLogo" />
                {list}
            </div>
        )
    }
    
}

export default NavDesktop;