import { Route, Redirect } from "react-router-dom"
//import articleForm from './Article/articleForm'

import ArticleForm from "./Article/ArticleForm"
import ArticleList from "./Article/ArticleList"
import ArticleEditForm from './Article/ArticleEditForm'
import EventForm from "./Event/EventForm"
import EventList from "./Event/EventList"
import EventEditForm from './Event/EventEditForm'
import MessageForm from "./Message/MessageForm"
import MessageList from "./Message/MessageList"
import MessageEditForm from './Message/MessageEditForm'

//import Joke from './Jokes/Joke'
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
        events:[],
        messages:[]

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
            APIManager.getAll("messages")
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


        deleteArticle = id => APIManager.Delete("articles",id)
    .then(() => {
        APIManager.getAll("articles")
        .then(articles => this.setState({
            articles: articles
        }))
    })

    EditArticle = (id, object) => {
        return APIManager.edit("articles", id, object)
        .then(() => 
            APIManager.getAll("articles"))
        .then(articles =>
            this.setState({ articles: articles })
            )
    }
        
        
        addEvents = event => APIManager.post("events", event)
        .then(() => APIManager.getAll("events"))
        .then(events => this.setState({
            events: events

        }))

        deleteEvent = id => APIManager.Delete("events",id)
    .then(() => {
        APIManager.getAll("events")
        .then(events => this.setState({
            events: events
        }))
    })

    EditEvent = (id, object) => {
        return APIManager.edit("events", id, object)
        .then(() => 
            APIManager.getAll("events"))
        .then(events =>
            this.setState({ events: events })
            )
    }

    addMessage = message => APIManager.post("messages", message)
        .then(() => APIManager.getAll("messages"))
        .then(messages => this.setState({
            messages: messages

        }))


        deleteMessage = id => APIManager.Delete("messages",id)
    .then(() => {
        APIManager.getAll("messages")
        .then(messages => this.setState({
            messages: messages
        }))
    })

    EditMessage = (id, object) => {
        return APIManager.edit("messages", id, object)
        .then(() => 
            APIManager.getAll("messages"))
        .then(messages =>
            this.setState({ messages: messages })
            )
    }




    render() {
        return (

            <React.Fragment>
                <Route path="/login" component={Login} />

                {/* <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Joke {...props}/> 

                } else {
                    return <Redirect to ="/login"/>
                }
            }}/> */}

                <Route exact path="/articles" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ArticleList {...props}
                            deleteArticle={this.deleteArticle}
                            articles={this.state.articles}
                            EditArticle={this.EditArticle}
                             />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/articles/new" render={(props) => {
                    return <ArticleForm {...props}
                        addArticle={this.addArticle} />
                }} />

                <Route path="/articles/Edit/:articleId(\d+)" render={(props) => {
                        return <ArticleEditForm {...props}
                            articles={this.state.articles}
                            EditArticle={this.EditArticle}/>
                             //employees={this.state.employees} />
                    }} />


                 <Route exact path="/events" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EventList {...props}
                            deleteEvent={this.deleteEvent}
                            events={this.state.events} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/events/new" render={(props) => {
                    return <EventForm {...props}
                        addEvents={this.addEvents} />
                }} />


                 <Route path="/events/Edit/:eventId(\d+)" render={(props) => {
                        return <EventEditForm {...props}
                            events={this.state.events}
                            EditEvent={this.EditEvent}/>
                             //employees={this.state.employees} />
                    }} />



                    <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <MessageList {...props}
                            deleteMessage={this.deleteMessage}
                            messages={this.state.messages}
                            //EditArticle={this.EditArticle}
                             />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/messages/new" render={(props) => {
                    return <MessageForm {...props}
                        addMessage={this.addMessage} />
                }} />

                <Route path="/messages/Edit/:messageId(\d+)" render={(props) => {
                        return <MessageEditForm {...props}
                            messages={this.state.messages}
                            EditMessage={this.EditMessage}/>
                             //employees={this.state.employees} />
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
