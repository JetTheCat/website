import React from "react"
import { Link } from "react-router-dom"
import jet from "../../img/basic-jet.png"
import "../../css/home/MainInfo.css"

class MainInfo extends React.Component {

    constructor() {
        super()
        this.state = {
            render: false
        }
    }

    scrollTop() {
        window.scrollTo(0,0)
    }


    render() {
        return (
            <div className="home-info">
                <div className="home-info-img-container">
                    <img src={jet} className="home-info-img-position" alt="jet"/>
                </div>
                <div className="home-info-text-box">
                    <h1>Jet Young Lim</h1>
                    <h2>Computer Science Student</h2>
                    <p>
                        Currently doing my Bachelor's degree for Computer Science at the University of New South Wales. Programmer with experience
                        in object oriented programming and software development with languages such as C, Java, Python and Javascript. 
                        Familiar with other useful tools such as HTML, CSS and React for web development plus knowledge with assembly programming
                        with MIPS. Worked with PostgreSQL language for sql programming in databases as well. 
                    </p>
                    <h3>See more of my works at my Portfolio!</h3>
                    <Link onClick={this.scrollTop} className="home-info-port-link" to="/portfolio">Portfolio</Link>
                </div>
            </div>
        )
    }
}

export default MainInfo