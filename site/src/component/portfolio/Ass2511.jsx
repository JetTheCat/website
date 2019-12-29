import React from "react"
import "../../css/portfolio/Ass2511.css"
import Game from "../../img/game.gif"
import mil1_0 from "../../img/mil1_0.png"
import mil1_1 from "../../img/mil1_1.png"
import mil2_0 from "../../img/mil2_0.png"
import mil2_1 from "../../img/mil2_1.png"
import mil2_2 from "../../img/mil2_2.png"
import mil3_0 from "../../img/mil3_0.png"
import mil3_1 from "../../img/mil3_1.png"


class Ass2511 extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        console.log(this.props.status)
        return (
            <div id="ass2511-container" className={(this.props.status) ? "ass2511-open" : "ass2511-close"}>

                <h1>Dungeon Game with Object Oriented Programming</h1>
                <div className="ass2511-type">
                    <div className="ass2511-box">
                        <div>
                            <img src={Game} alt="game_gif" className="ass2511-img" />
                        </div>

                        <div>
                            <h2>The Legend of OOD!</h2>
                            <p>
                                This is a mini dungeon game developed using Java as the base programming language
                                for the game's backend functionality and JavaFX framework for the User Interface design and interaction.
                            </p>
                            <p>
                                The game is an application that lets the user move a player around a dungeon and try to overcome various challenges 
                                in order to "complete" the dungeon by reaching some goal where the simplest form of such a puzzle is a maze, 
                                where the player must find their way from the starting point to the exit. 
                            </p>
                            <p>
                                The game design process is broken down into 3 milestone phases with each milestone serving an important role
                                towards creating the game application.
                            </p>
                        </div>

                    </div>
                </div>

                <h2 className="ass2511-milestone">Milestone 1</h2>
                <div className="ass2511-type">
                    <div className="ass2511-box">
                        <ul>
                            <li>High level epic stories derived from the problem statement with
                                each story having its issue and a corresponding tag to mark user
                                stories that falls under it.
                            </li>
                            <li>
                                User stories with each containing a description/explanation of the feature following
                                the RGB model (Role-Goal-Benefit), the amount of story points to implement the 
                                user story, a priority tag and finally an acceptance criteria for the issue.
                            </li>
                        </ul>
                        <div>
                            <img src={mil1_0} alt="img" />
                        </div>

                        <div>
                            <img src={mil1_1} alt="img" />
                        </div>
                    </div>
                </div>


                <h2 className="ass2511-milestone">Milestone 2</h2>
                <div className="ass2511-type">
                    <div className="ass2511-box">
                        <ul>
                            <li>
                                Design UML Class Diagram and implement the game application backend based on the requirement analysis from Milestone 1. 
                                The UML Diagram models the use of at least 3 different Java design patterns 
                                to design certain component's of the game application backend.
                            </li>
                            <li>
                                Some notable design patterns used are the composite design pattern used to design the 
                                goal system, strategy pattern used to design algorithms for different entity interaction and state pattern for the 
                                game application's state.
                            </li>
                        </ul>

                        <div>
                            <img src={mil2_1} alt="img"/>
                        </div>
                        <div>
                            <img src={mil2_0} alt="img"/>
                            <img src={mil2_2} alt="img"/>
                        </div>
                    </div>
                </div>


                <h2 className="ass2511-milestone">Milestone 3</h2>
                <div className="ass2511-type">
                    <div className="ass2511-box">
                        <p>
                            The UI design and extension phase. Using the JavaFX framework and its scenebuilder tool to develop a usable user interface for 
                            the game application. User-centric design and usability heuristics such as user control and freedom, help & documentation
                            for the game and error prevention were taken into consideration when designing the frontend UI. 
                        </p>         
                        <div>
                            <img src={mil3_0} alt="img"/>
                        </div>
                        <div>
                            <img src={mil3_1} alt="img"/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Ass2511;