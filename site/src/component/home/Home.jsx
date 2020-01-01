import React from "react"
import Navbar from '../global/Navbar.jsx';
import Footer from '../global/Footer.jsx';
import MainDisplay from './MainDisplay.jsx';
import MainInfo from './MainInfo.jsx';

class Home extends React.Component {
    render(){
        return (
            <div>
                <Navbar pageName="Home"/>
                <MainDisplay />
                <MainInfo />
                <Footer />
            </div>
        )
    }
}

export default Home;