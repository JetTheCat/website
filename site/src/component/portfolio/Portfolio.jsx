import React from "react"
import Navbar from "../global/Navbar.jsx"
import BannerDisplay from "./BannerDisplay.jsx"
import Projects from "./Projects.jsx"
import Contact from "../global/Contact.jsx"


class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <BannerDisplay />
                <Projects />
                <Contact />
            </div>
        )
    }
}

export default Portfolio;