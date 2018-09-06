import React, { Component } from "react"
import "./Message.css"


export default class MessageEditForm extends Component {

    // componentDidMount() {
   
   
    //     const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

   
    // }

    state = {
        Messageinput: "",
       
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
    
    
    
    constructEditMessage = evt => {
        evt.preventDefault()
        if (this.state.Messageinput === "") {
            window.alert("Please enter Message")
        } else {
            const editMessage = {
                Messageinput:this.state.Messageinput,
             
             
            }

            // Create the animal and redirect user to animal list
            this.props.EditMessage(this.props.match.params.messageId, editMessage).then(() => 
            this.props.history.push("/messages")
            //this.props.EditAnimal(animal).then(() => this.props.history.push("/animals"))
            )}
    }
    componentDidMount(){
    const message = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId)) 
     || {}
     const user = this.props.users.find(e => e.id === message.user)
    console.log(message)
    console.log(user)


        console.log(this.props);

    this.setState({
        Messageinput:message.Messageinput,
    })
    }
    render() {

        return (
            <React.Fragment>
                <form className="message-Form">
                    <div className="form-group">
                        <label htmlFor="eventType">Edit Your Message</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="Messageinput"
                               value={this.state.Messageinput}
                               placeholder=" Edit Your Message" />
                    </div>
                
                    <label htmlFor="user">user name</label>
                    {
                            
                            this.props.users.map (user => <h5 key={user.id}>{user.name}</h5>)
                        }



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
                    <button type="submit" onClick={this.constructEditMessage} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }





}

