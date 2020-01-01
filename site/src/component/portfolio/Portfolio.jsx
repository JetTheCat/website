import React from "react"
import Navbar from "../global/Navbar.jsx"
import BannerDisplay from "./BannerDisplay.jsx"
import Projects from "./Projects.jsx"
import Footer from "../global/Footer.jsx"
import Jet from "./Jet.jsx"


class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Navbar pageName="Portfolio"/>
                <BannerDisplay />
                <Jet />
                <Projects />
                <Footer />
            </div>
        )
    }
}

export default Portfolio;