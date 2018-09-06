import React, { Component } from "react"
import "./Message.css"
//import APIManager from "./module/APIManager"


export default class EventForm extends Component {

    state={
        Messageinput: "",
        time:""
    }



    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }



    

    //  SetTime = evt(i) => {
    //     var d = new Date(),
    //         h = (d.getHours()<10?'0':'') + d.getHours(),
    //         m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    //      i.value  = h + ':' + m;
    //     }
        
        // <br/> 
        // <a onclick="timeNow(test2)" href="#">SET TIME</a>
        // <input id="test2" type="time" value="10:40"/>
        
    


     MakeNewMessage = evt => {
         evt.preventDefault()
         const message = {
            Messageinput:this.state.Messageinput,
            time: new Date().toLocaleString()
            //time:Date.now()
         
         
            }
            this.props.addMessage(message, "messages").then(() => this.props.history.push("/messages"))


//          APIManager.post("articles", article)
// .then(() => APIManager.getAll("articles"))
// .then(articles => this.setState({
//     articles: articles

}

     render() {
        return (
           <React.Fragment>
               <div className="messageContainer">
                 <h3>Start Chatting</h3>
              <form className="eventForm">
                 <div className="form-group">
                    <label htmlFor="Message">Message</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="Messageinput"
                       placeholder="Write a Message" />
                 </div>


                 {/* <a onclick="evt" href="#">SET TIME</a>
         <input id="evt" type="time" value="10:40"/> */}
                 {/* <div className="form-group">
                    <label htmlFor="synopsis">Description</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="synopsis" placeholder="Description" />
                 </div> */}
                 {/* <div className="form-group">
                 <label for="eventDate">Time:</label>
                    <input required type="time" id="time"
                       className="form-control"
                       onChange={this.handleFieldChange}
                     placeholder="Time" />
                 </div> */}
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
                 <button type="submit" onClick={this.MakeNewMessage} className="btn btn-primary">Submit</button>
              </form>
              </div>
           </React.Fragment>
        )
     }
  }








    


