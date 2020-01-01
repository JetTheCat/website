import React from "react"
import TimeDisplay from "./TimeDisplay"
import "../../css/home/MainDisplay.css"

class MainDisplay extends React.Component {

    constructor() {
        super()
        this.state = {
            url: "https://source.unsplash.com/random/2000x800",
            id: 0,
        }
    }

    getNewURL() {
        const topic = [
            "dessert",
            "travel",
            "japan",
            "city",
            "bridge",
            "pastries",
            "retro",
            "tech",
            "abstract",
            "animals",
            "hongkong",
            "mountain",
            "architecture",
            "ocean",
            "snow",
            "vaporwave",
            "sky",
            "chapel",
            "europe",
            "malaysia",
            "waves",
            "penguins",
            "lightbulb"
        ]

        const topicLen = topic.length
        const obj = {
            newURL: "",
            newId: 0
        }


        if(this.state.id === topicLen){
            obj.newId = 0
        }
        else 
            obj.newId = this.state.id + 1

        const width = window.innerWidth
        const height = window.innerHeight
        const res = width + "x" + height

        obj.newURL = "https://source.unsplash.com/random/" + res + "/?" + topic[obj.newId]
        
        return obj
    }

    
    componentDidMount(){
        this.imgRotate = setInterval(() => {
            this.setState({
                url: this.getNewURL().newURL,
                id: this.getNewURL().newId
            })
        }, 18000)
          
    }

    componentWillUnmount() {
        clearInterval(this.imgRotate)
    }

    // Replaying CSS animation explanation
    // https://stackoverflow.com/questions/52231320/how-to-replay-a-css3-animation-in-reactjs
    render() {
        return (
            <div id="rotating-image" className="home-display-container">
                <img key={new Date()} src={this.state.url} alt="test"/>
                <h2>It's Currently</h2>
                <TimeDisplay />
            </div>

        )
    }
}

export default MainDisplay;