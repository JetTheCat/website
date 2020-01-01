import React from "react"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

class Navbar extends React.Component {
    
    render() {
        return (
            <div>
                <NavDesktop pageName={this.props.pageName}/>
                <NavMobile pageName={this.props.pageName}/>
            </div>
        )
    }
}

export default Navbar;