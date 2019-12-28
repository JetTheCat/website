import React from "react"
import "../../css/portfolio/Projects.css"
import Ass2511 from "./Ass2511.jsx"

class Projects extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="port-box">
                <Ass2511 />
            </div>
        )
    }
}

export default Projects;