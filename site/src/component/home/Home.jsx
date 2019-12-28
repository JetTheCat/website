import React from "react"
import Navbar from '../global/Navbar.jsx';
import Contact from '../global/Contact.jsx';
import MainDisplay from './MainDisplay.jsx';
import MainInfo from './MainInfo.jsx';

class Home extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <MainDisplay />
                <MainInfo />
                <Contact />
            </div>
        )
    }
}

export default Home;