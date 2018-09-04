import { Route, Redirect } from "react-router-dom"
import articleList from './Article/articleList'
import articleForm from './Article/articleForm'
import React, { Component } from "react"
import Login from './Login/Login'
import './ApplicationView.css'

import APIManager from "../module/APIManager"

export default class ApplicationViews extends Component {  
    
    isAuthenticated = () => localStorage.getItem("credentials") !== null


    state = {


        articles: []

    }


    componentDidMount() {

        APIManager.getAll("articles")
        .then(allArticles => {
            this.setState({
                articles: allArticles
            })
            })
}


addArticle = article => APIManager.post("articles", article)
.then(() => APIManager.getAll("articles"))
.then(articles => this.setState({
    articles: articles

}))




render() {
    return (
        <React.Fragment>
            <div className="container">
            <Route path="/login" component={Login}/>
            <Route path="/articles/new" render={(props) => {
                        return <articleForm {...props}
                            addArticle={this.addArticle}/>
                            //employees={this.state.employees} />
                        }} 
                        />
            
            
            
            
            </div>
            </React.Fragment>

    )

}

}