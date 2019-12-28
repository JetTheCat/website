import React from "react"
import links from "./link.js"
import NavContent from "./NavContent"
import navLogo from "../../img/nav-logo.png"
import "../../css/home/Nav.css"

class Navbar extends React.Component {
    
    render() {
        const content = links.map(obj => <NavContent key={obj.id} info={obj}/>)
        return (
            <div>
                <div id="navbar" className="mainNav">
                    <img src={navLogo} alt="logo" className="navLogo" />
                    {content}
                </div>
            </div>
        )
    }
}

export default Navbar;