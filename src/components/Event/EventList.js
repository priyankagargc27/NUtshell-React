import React, { Component } from 'react'
//import { Link } from "react-router-dom"
 import "./Event.css"

export default class EventList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="events">
                    {
                        this.props.events.map(event =>
                            <div key={event.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title" className="event-name">
                                        {event.EventType}
                                    </h5>
                                    <time>${event.date}</time>
                                    <h6>
                                    
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.deleteEvent(event.id, "events")}>Delete</button>

                                             <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.history.push(`/events/Edit/${event.id}`)}>Edit</button>
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="eventButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/events/new")
                        }
                        }>Create New Events
                </button>
                </div>
            </React.Fragment>
        )
    }
}