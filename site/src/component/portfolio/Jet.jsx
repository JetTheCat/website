import React from "react"
import unsw from "../../img/unsw.png"
import barista from "../../img/barista.png"
import "../../css/portfolio/Jet.css"


class Jet extends React.Component {

    render() {
        return (
            <div className="jet-container">
                <div className="jet-box">
                    <div style={{margin:"0 auto"}}>
                        <img src={unsw} alt="img" className="jet-unsw"/>
                    </div>
                    <div className="jet-info-box">
                        <h2>Education</h2>
                        <ul>
                            <li>
                                Currently a 3rd year student doing his degree under the Bachelor of Computer Science
                            </li>
                            <li>
                                IT Director of the Malaysian Student Association in UNSW
                            </li>
                            <li>University Achievements</li>
                                <ul>
                                    <li>
                                        Worked on team based software projects such as creating an online ordering application with 
                                        Python, Flask and Jinja.
                                    </li>
                                    <li>
                                        Pair programming to create a game application with JavaFX and Java with object oriented design programming 
                                    </li>
                                    <li>
                                        Implemented page ranking algorithm for generalised text searching
                                    </li>
                                    <li>
                                        Implemented term frequency - inverse document frequency algorithm to reflect the significance of a word in a given
                                        document
                                    </li>
                                    <li>
                                        Experience with PostgreSQL and SQLite3 for sql programming. Used Python and PostgreSQL to process information retrieved
                                        from a database.
                                    </li>
                                    <li>
                                        You can find out more about my university works or personal project at the button below!
                                    </li>
                                </ul>

                        </ul>
                    </div>


                    <div className="jet-box">
                        <div className="jet-info-box">
                            <h2>Interesting Fact: I'm a certified Barista!</h2>
                            <ul>
                                <li>Certificates</li>
                                    <ul>
                                        <li>
                                            Attained <b>SITHFAB005</b> to prepare and serve espresso coffee.
                                        </li>
                                        <li>
                                            Attained <b>SITXFSA001</b> to use hygienic practices for food safety.
                                        </li>
                                    </ul>
                                <li>
                                    Learned to adjust grind to achieve perfect 30ml-in-30 second extraction.
                                </li>
                                <li>
                                    Learned to present coffees in different coffee art and presentation techniques.
                                </li>
                                <li>
                                    Learned to operate and clean coffee machines.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={barista} className="jet-barista" alt="img"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Jet;