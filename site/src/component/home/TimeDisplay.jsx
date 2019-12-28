import React from "react"
import "../../css/home/Time.css"

class TimeDisplay extends React.Component {
    
    constructor() {
        super()
        this.state = {
            time: this.updateTime()
        }
    }

    // TODO: Update live clock & research animating stuff again in css
    updateTime() {
        const time = new Date()
        const hour = (time.getHours() > 12) ? time.getHours() - 12 : time.getHours()
        const mins = time.getMinutes()
        const zero = (mins < 10) ? "0" : ""
        const convention = (time.getHours() < 12) ? "am" : "pm"
        const result = hour + ":" + zero + mins + " " + convention
        return result
    }

    componentDidMount() {
        setInterval(() => {
            console.log(this.updateTime())
            this.setState({
                time: this.updateTime()
            })
        }, 1000)
    }

    render() {
        return (
            <h1 className="time">{this.state.time}</h1>
        )
    }
}

export default TimeDisplay;