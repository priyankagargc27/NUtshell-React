import React, { Component } from "react"
import "./login.css"



export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        isChecked:false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
       if(this.state.isChecked==true){
        localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        )

    }else{
        sessionStorage.setItem(
            "rememberme",
            JSON.stringify({ 
                
                email: this.state.email,
                password: this.state.password,
            })
        )
    }
}
    render() {
        return (
            <form onSubmit={this.handleLogin}>
            <div className ="login">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <label htmlFor="rememberme">
                 Remember me
                 </label>
                 <input onClick={() => (this.setState({isChecked: true}))} type="checkbox" id="myCheck"/>
                <button type="submit">
                    Sign in
                </button>
                </div>
            </form>
        )
    }
}