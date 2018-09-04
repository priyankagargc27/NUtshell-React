import React, { Component } from "react"
import articleForm from "./articleForm"


export default class ArticleList extends Component {

    state = {
        articles: []
    }

    componentDidMount () {
        fetch(`http://localhost:5002/articles`)
            .then(r => r.json())
            .then(articles => this.setState({articles: articles}))
    }

    render() {
        return (
            <div>
                {
                    this.state.articles.map(article => <articleForm key={article.id} article={article}  {...this.props}/>)
                }
            </div>
        )
    }
}