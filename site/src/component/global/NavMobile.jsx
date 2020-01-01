import React from "react"
import { Link } from "react-router-dom"
import links from "./link.js"
import "../../css/global/NavMobile.css"

class NavMobile extends React.Component {

    constructor() {
        super()
        this.state = {
            show: false,
        }
        this.display = this.display.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        window.scrollTo(0,0)
        this.setState({
            show: !this.state.show
        })
    }

    display() {
        this.setState({
            show: !this.state.show
        })
    }

    
    render() {
        const list = links.map(obj => <Link key={obj.id} to={obj.link} 
            onClick={this.handleChange} className="nav-mobile-link">{obj.description}</Link>)
        return (
            <div>
                <div className="nav-mobile">
                    <div className="navMobile-icon-container" onClick={this.display}>
                        <div className="navMobile-icon"/>
                        <div className="navMobile-icon"/>
                        <div className="navMobile-icon"/>
                    </div>

                    <div className="nav-page">
                        <h1 className="nav-page-text">{this.props.pageName}</h1>
                    </div>
                </div>

                <div id="nav-mobile-content" className={(this.state.show) ? "nav-mobile-show" : "nav-mobile-hide"}>
                    {list}
                </div>
            </div>
        )
    }
}

export default NavMobile;