import React, { Component } from "react"
import "./Article.css"


export default class ArticleEditForm extends Component {

    // componentDidMount() {
   
   
    //     const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

   
    // }

    state = {
        title : "",
        Description : "",
        url : ""
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
    
    
    
    constructEditArticle = evt => {
        evt.preventDefault()
        if (this.state.title === "") {
            window.alert("Please enter Article title")
        } else {
            const editArticle = {
                title: this.state.title,
                Description: this.state.Description,
                url: this.props.url
            }

            // Create the animal and redirect user to animal list
            this.props.EditArticle(this.props.match.params.articleId, editArticle).then(() => 
            this.props.history.push("/articles")
            //this.props.EditAnimal(animal).then(() => this.props.history.push("/animals"))
            )}
    }
    componentDidMount(){
    const article = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId)) 
    // || {}
    // const employee = this.props.employees.find(e => e.id === animal.employee)
    console.log(article)
        console.log(this.props);

    this.setState({
        title:article.title,
        Description:article.Description,
       url:article.url
    })
    }
    render() {

        return (
            <React.Fragment>
                <form className="article Form">
                    <div className="form-group">
                        <label htmlFor="articleTitle">Article Title</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               value={this.state.title}
                               placeholder="Article Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description">Description</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="Description" 
                               value={this.state.Description}
   
                              placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url">URL</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="url" 
                               value={this.state.url}
   
                              placeholder="URL" />
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
                    <button type="submit" onClick={this.constructEditArticle} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }





}

