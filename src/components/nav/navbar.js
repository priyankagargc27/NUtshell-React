import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"


class NavBar extends Component {
constructor() {
    super();
    this.state={
        search: 'search for'
    };
}
updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
    //console.log(event.target.value)
}

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Message</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles">Article</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Task">Task</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Events">Events</Link>
                    </li>
                    <li className ="nav-item">
                    <Link className="nav-link" to="/Logout">Logout</Link>
                    </li>
                </ul>
                <div>
                <input type="text" value={this.state.search}
                                       onChange={this.updateSearch.bind(this)}/>
                </div>
            </nav>
        )
    }
}

export default NavBar