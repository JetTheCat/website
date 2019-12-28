import React from "react"
import { Link } from "react-router-dom"
import "../../css/home/Nav.css"

class NavContent extends React.Component {

    scrollTop() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <Link key={this.props.info.id} to={this.props.info.link} onClick={this.scrollTop()}>{this.props.info.description}</Link>
        )
    }
    
}

export default NavContent;