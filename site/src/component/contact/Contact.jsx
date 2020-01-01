import React from "react"
import Navbar from "../global/Navbar"
import Footer from "../global/Footer"
import facebook from "../../img/facebook.svg"
import gmail from "../../img/gmail.svg"
import linkedin from "../../img/linkedin.svg"
import instagram from "../../img/instagram.svg"
import "../../css/contact/Contact.css"

class Contact extends React.Component {

//<a target="_blank" href="https://icons8.com/icons/set/facebook-new">Facebook icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icons/set/gmail">Gmail icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icons/set/linkedin--v2">LinkedIn icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icons/set/instagram-new">Instagram icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    constructor() {
        super()
        this.state = {
            display: false
        }

        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    toggleDisplay() {
        this.setState((prevState) => ({
            display: !prevState.display
        }))
    }


    /**
     * <h1>Contact Information</h1> and <Button>Icon Source</Button> placed inside <ul> with the <li>'s to
     * ensure even alignment with all elements otherwise they will look a bit off if placed outside the <ul>
     */
    render() {
        return (
            <div className="contact-display">
                <Navbar pageName="Contact"/>
                <div className="contact-box">
                    <div className="contact-info">
                        <ul>
                            <h1>Contact Information</h1>
                            <li>
                                <img src={gmail} alt="img"/>
                                <p>Email: jetyoung2011@gmail.com</p>
                            </li>
                            <li>
                                <img src={linkedin} alt="img"/>
                                <p>LinkedIn: </p>
                                <a target="_blank" href="https://www.linkedin.com/in/jet-young-lim-54903a196/">LinkedIn Profile</a>
                            </li>
                            <li>
                                <img src={instagram} alt="img"/>
                                <p>Instagram: </p>
                                <a target="_blank" href="https://www.instagram.com/jetyoung2011/?hl=en">Instagram Profile</a>
                            </li>
                            <li>
                                <img src={facebook} alt="img"/>
                                <p>Facebook: </p>
                                <a target="_blank" href="https://www.facebook.com/lim.jetyoung">Facebook Profile</a>
                            </li>
                            <button className="contact-icon-button" onClick={this.toggleDisplay}>Icon Source</button>   
                        </ul>

                        
                        <div id="contact-icon-box" className={(this.state.display) ? "contact-icon-show" : "contact-icon-hide"}>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://icons8.com/icons/set/facebook-new">Facebook icon</a> 
                                    <p>icon by</p>
                                    <a target="_blank" href="https://icons8.com">Icons8</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://icons8.com/icons/set/gmail">Gmail icon</a> 
                                    <p>icon by</p>
                                    <a target="_blank" href="https://icons8.com">Icons8</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://icons8.com/icons/set/linkedin--v2">LinkedIn icon</a> 
                                    <p>icon by</p>
                                    <a target="_blank" href="https://icons8.com">Icons8</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://icons8.com/icons/set/instagram-new">Instagram icon</a> 
                                    <p>icon by</p>
                                    <a target="_blank" href="https://icons8.com">Icons8</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;