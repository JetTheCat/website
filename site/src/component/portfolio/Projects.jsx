import React from "react"
import "../../css/portfolio/Projects.css"
import Ass2511 from "./Ass2511.jsx"

class Projects extends React.Component {

    constructor() {
        super()
        this.state = {
            display: false
        }

        this.toggleProjectDisplay = this.toggleProjectDisplay.bind(this)
    }

    toggleProjectDisplay() {
        if(this.state.display) {
            this.setState({
                display: false
            })
        }
        else {
            this.setState({
                display: true
            })
        }
    }

    render() {
        const text = (this.state.display) ? "Hide Projects" : "Show Projects"
        return (
            <div className="proj-box">
                <button className="proj-button" onClick={this.toggleProjectDisplay}>{text}</button>
                <Ass2511 status={this.state.display}/> 
            </div>
        )
    }
}

export default Projects;