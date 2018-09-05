import React, { Component } from "react"
import "./Event.css"
//import APIManager from "./module/APIManager"


export default class EventForm extends Component {

    state={
        EventType: "",
        date:""
    }



    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }

     MakeNewEvent = evt => {
         evt.preventDefault()
         const event = {
            EventType:this.state.EventType,
             
            date:this.state.date
         
         
            }
            this.props.addEvents(event, "events").then(() => this.props.history.push("/events"))


//          APIManager.post("articles", article)
// .then(() => APIManager.getAll("articles"))
// .then(articles => this.setState({
//     articles: articles

}

     render() {
        return (
           <React.Fragment>
                 <h3>Events</h3>
              <form className="eventForm">
                 <div className="form-group">
                    <label htmlFor="title">Event</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="title"
                       placeholder="Title" />
                 </div>
                 {/* <div className="form-group">
                    <label htmlFor="synopsis">Description</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="synopsis" placeholder="Description" />
                 </div> */}
                 <div className="form-group">
                 <label for="eventDate">Date:</label>
                    <input required type="date" id="eventDate"
                       className="form-control"
                       onChange={this.handleFieldChange}
                     placeholder="EventDate" />
                 </div>
                 {/* <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="date" value={this.state.date} />
                 </div> */}
                 {/* <div className="form-group">
                    <label htmlFor="employee">Assign to caretaker</label>
                    <select defaultValue="" name="employee" id="employee"
                       onChange={this.handleFieldChange}>
                       <option value="">Select an employee</option>
                       {
                          this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                       }
                    </select>
                 </div> */}
                 <button type="submit" onClick={this.MakeNewEvent} className="btn btn-primary">Submit</button>
              </form>
           </React.Fragment>
        )
     }
  }








    


