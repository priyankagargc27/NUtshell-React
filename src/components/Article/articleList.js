import React, { Component } from 'react'
import { Link } from "react-router-dom"
 import "./Article.css"

export default class ArticleList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="articles">
                    {
                        this.props.articles.map(article =>
                            <div key={article.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title" className="article-name">
                                        {article.title}
                                    </h5>
                                    <section className="card-title" className="article-Description">
                                        {article.Description}
                                    </section>
                                    <h6>
                                        <Link className="nav-link" to={`/articles/${article.url}`}>Details</Link>
                                    </h6>
                                    <h6>
                                    
                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.deleteArticle(article.id, "articles")}>Delete</button>
                                    

                                    <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.history.push(`/articles/Edit/${article.id}`)}>Edit</button>
                            {/* //         <a href="#"
                            // onClick={() =>  this.props.history.push(`/articles/Edit/${article.id}`)}
                        
                            //     className="card-link">Edit</a> */}

                                    </h6> 
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="articleButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/articles/new")
                        }
                        }>Create New Article
                </button>
                </div>
            </React.Fragment>
        )
    }
}