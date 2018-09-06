import React, { Component } from "react"
import "./Event.css"


export default class EventEditForm extends Component {

    // componentDidMount() {
   
   
    //     const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

   
    // }

    state = {
        EventType: "",
        date:""
    }


    //  constructor() {
    //      super();
    //      this.state={
    //          search: this.props.
    //      };
    //  }
    // updateValue(event){
    //     this.setState({search: event.target.value.substr(0,20)})
    //     //console.log(event.target.value)
    // }

     // Update state whenever an input field is edited
     handleFieldChange = evt => {
        console.log("handlefieldchange",evt)
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    
    
    constructEditEvent = evt => {
        evt.preventDefault()
        if (this.state.title === "") {
            window.alert("Please enter Event Type")
        } else {
            const editEvent = {
                EventType:this.state.EventType,
             
                date:this.state.date
             
            }

            // Create the animal and redirect user to animal list
            this.props.EditEvent(this.props.match.params.eventId, editEvent).then(() => 
            this.props.history.push("/events")
            //this.props.EditAnimal(animal).then(() => this.props.history.push("/animals"))
            )}
    }
    componentDidMount(){
    const event = this.props.events.find(a => a.id === parseInt(this.props.match.params.eventId)) 
    // || {}
    // const employee = this.props.employees.find(e => e.id === animal.employee)
    console.log(event)
        console.log(this.props);

    this.setState({
        EventType:event.EventType,
        date:event.date,
    })
    }
    render() {

        return (
            <React.Fragment>
                <form className="event Form">
                    <div className="form-group">
                        <label htmlFor="eventType">Event Type</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="EventType"
                               value={this.state.EventType}
                               placeholder="Event Type" />
                    </div>
                    <div className="form-group">
                 <label htmlFor="eventDate">Date:</label>
                    <input required type="date" id="date"
                       className="form-control"
                       onChange={this.handleFieldChange}
                     placeholder="EventDate" />
                 </div>



                     {/* <div className="form-group">
                        <label htmlFor="employee">Edit to caretaker</label>
                        <select defaultValue={this.state.employee} name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            
                            this.props.employees.map(employee => <option key={employee.id}>{employee.name}</option>)
                        }
                        </select>
                    </div>  */}
                    <button type="submit" onClick={this.constructEditEvent} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }





}

