import React, { Component } from 'react'
//import { Link } from "react-router-dom"
 import "./Message.css"

export default class EventList extends Component {


    
    render() {
        return (
            <React.Fragment>
                <section className="messages">
                    {
                        this.props.messages.map(message =>
                            <div key={message.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title" className="Message-name">
                                        {message.Messageinput}
                                    </h5>
                                     <time>Sent on:{message.time}</time>
                                     <p>{message.userName}</p>


                                    <h6>
                                    
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.deleteMessage(message.id, "messages")}>Delete</button>

                                             <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.history.push(`/messages/Edit/${message.id}`)}>Edit</button>
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="messageButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/messages/new")
                        }
                        }>Create New Message
                </button>
                </div>
            </React.Fragment>
        )
    }
}