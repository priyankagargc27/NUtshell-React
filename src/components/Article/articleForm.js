import React, { Component } from "react"
import "./Article.css"
//import APIManager from "./module/APIManager"


export default class ArticleForm extends Component {

    state={
        title : "",
        Description : "",
        url : ""
    }



    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }

     MakeNewArticle = evt => {
         evt.preventDefault()
         const article = {
             title:this.state.title,
             Description:this.state.Description,
             url:this.state.url
         
         
            }
            this.props.addArticle(article, "articles").then(() => this.props.history.push("/articles"))

//          APIManager.post("articles", article)
// .then(() => APIManager.getAll("articles"))
// .then(articles => this.setState({
//     articles: articles

}

     render() {
        return (
           <React.Fragment>
                 <h3>Articles</h3>
              <form className="articleForm">
                 <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="title"
                       placeholder="Title" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="Description" placeholder="Description" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="url">URL</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="url" placeholder="URL" />
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
                 <button type="submit" onClick={this.MakeNewArticle} className="btn btn-primary">Submit</button>
              </form>
           </React.Fragment>
        )
     }
  }








    


