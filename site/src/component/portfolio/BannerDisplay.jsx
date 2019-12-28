import React from "react"
import "../../css/portfolio/BannerDisplay.css"

class BannerDisplay extends React.Component {

    constructor() {
        super()
        this.state = {
            url: "https://source.unsplash.com/random/2000x400/?code,dark"
        }
    }

    render() {
        return (
            <div className="port-display-container">
                <img key={new Date()} src={this.state.url} alt="coding" />
                <h2>Welcome to My Portfolio</h2>
            </div>
        )
    }
}

export default BannerDisplay;