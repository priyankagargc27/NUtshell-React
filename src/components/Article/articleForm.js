import React, { Component } from "react"
import "./article.css"


export default class articleForm extends Component {

    render() {
        return (
            <div className="article">
                <h5>{this.props.article.title}</h5>
                <p>{this.props.article.content}</p>
                <p> - {this.props.article.company}</p>
            </div>
        )
    }
}
