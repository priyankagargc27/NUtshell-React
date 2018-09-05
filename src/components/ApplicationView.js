import { Route, Redirect } from "react-router-dom"
//import articleForm from './Article/articleForm'

import ArticleForm from "./Article/ArticleForm"
import ArticleList from "./Article/ArticleList"
import EventForm from "./Event/EventForm"
import EventList from "./Event/EventList"
import React, { Component } from "react"
import Login from './Login/Login'
import './ApplicationView.css'

import APIManager from "../module/APIManager"

export default class ApplicationViews extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


    state = {

        currentView: "login",
        activeUser: localStorage.getItem("usersId"),
        articles: [],
        events:[]

    }



    componentDidMount() {

        APIManager.getAll("articles")
            .then(allArticles => {
                this.setState({
                    articles: allArticles
                })
            }),
            APIManager.getAll("events")
            .then(allEvents => {
                this.setState({
                    events: allEvents
                })
            })
    }


    addArticle = article => APIManager.post("articles", article)
        .then(() => APIManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles

        }))
        
        
        addEvents = event => APIManager.post("events", event)
        .then(() => APIManager.getAll("events"))
        .then(events => this.setState({
            events: events

        }))




    render() {
        return (

            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/articles" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ArticleList {...props}
                            //deleteArticle={this.deleteArticle}
                            articles={this.state.articles} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/articles/new" render={(props) => {
                    return <ArticleForm {...props}
                        addArticle={this.addArticle} />
                }} />


                 <Route exact path="/events" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EventList {...props}
                            //deleteArticle={this.deleteArticle}
                            events={this.state.events} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/events/new" render={(props) => {
                    return <EventForm {...props}
                        addEvents={this.addEvent} />
                }} />
            </React.Fragment>
        )
    }
}

{/* <div className="container">
            <Route path="/articles/new" render={(props) => {
                        return <articleForm {...props}
                            addArticle={this.addArticle}/>
                            //employees={this.state.employees} />
                        }} 
                        />
            
            
            
            
            </div> */}
