
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
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    




    

    // Handle for login submit
    handleLogin = function (e) {
        e.preventDefault()

        
        fetch("http://localhost:5002/users", {
            
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: this.state.email, password: this.state.password })
        })
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
                                            "credentials",
                                            JSON.stringify({ 
                                                
                                                email: this.state.email,
                                                password: this.state.password,
                                            })
                                        )
                                    }
                                }.bind(this)


    
    handleEmailChange = (evt) => {
        this.setState({ email: evt.target.value })
    }
    
    handlePasswordChange = (evt) => {
        this.setState({ password: evt.target.value })
    }
    render() {
        return (

            <div className="login">
            <form className="form-signin" onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleEmailChange} type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.handlePasswordChange} type="password" id="password" className="form-control" placeholder="Password" required="" />
                <label htmlFor="rememberme">
                 Remember me
                 </label>
                 <input onClick={() => (this.setState({isChecked: true}))} type="checkbox" id="myCheck"/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2018-2019</p>
            </form>
            </div>
        )
    }
}











































// import React, { Component } from "react"
// import "./login.css"
// import APIManager from "../module/APIManager"



// export default class Login extends Component {

//     // Set initial state
//     state = {
//         email: "",
//         password: "",
//         isChecked:false
//     }

//     // Update state whenever an input field is edited
//     handleFieldChange = (evt) => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     // Simplistic handler for login submit
//     handleLogin = (e) => {
//         e.preventDefault()

//         APIManager.saveUserEntry({
//             email:this.state.email.toLowerCase(),
//             password:this.state.password
//         })
//         .then (r => r.json())
//         .then ((response) => {
//             sessionStorage.setItem("currentuser",response.id)
    
//             sessionStorage.setItem(
//                 "credentials",
//                 JSON.stringify({
//                     email: this.state.name,
//                     password: this.state.password,
            
//                 })
//             )
//         })


       
//         /*
//             For now, just store the email and password that
//             the customer enters into local storage.
//         */
//        if(this.state.isChecked==true){
//         localStorage.setItem(
//             "credentials",
//             JSON.stringify({
//                 email: this.state.email,
//                 password: this.state.password,
//             })
//         )

//     }else{
//         sessionStorage.setItem(
//             "rememberme",
//             JSON.stringify({ 
                
//                 email: this.state.email,
//                 password: this.state.password,
//             })
//         )
//     }
// }
//     render() {
//         return (
//             <form onSubmit={this.handleLogin}>
//             <div className ="login">
//                 <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
//                 <label htmlFor="inputEmail">
//                     Email address
//                 </label>
//                 <input onChange={this.handleFieldChange} type="email"
//                        id="email"
//                        placeholder="Email address"
//                        required="" autoFocus="" />
//                 <label htmlFor="inputPassword">
//                     Password
//                 </label>
//                 <input onChange={this.handleFieldChange} type="password"
//                        id="password"
//                        placeholder="Password"
//                        required="" />
//                 <label htmlFor="rememberme">
//                  Remember me
//                  </label>
//                  <input onClick={() => (this.setState({isChecked: true}))} type="checkbox" id="myCheck"/>
//                 <button type="submit">
//                     Sign in
//                 </button>
//                 </div>
//             </form>
//         )
//     }
// }