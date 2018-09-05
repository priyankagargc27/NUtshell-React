import React, { Component } from "react"
//  import Login from "./Login/Login"
import NavBar from "./nav/NavBar"
import ApplicationView from "./ApplicationView"
//import App from "../App"
import "./Nutshell.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default class Nutshell extends Component {
    render() {
        return (
            
            <React.Fragment>
                
                <NavBar />
                {/* <Login /> */}
                <ApplicationView />
            </React.Fragment>
        )
    }
}

//export default Nutshell
