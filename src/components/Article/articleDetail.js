// import React, { Component } from "react"
// import "./Article.css"
// import dog from "./DogIcon.png"




// export default class ArticleDetail extends Component {
//     render() {
//         /*
//             Using the route parameter, find the animal that the
//             user clicked on by looking at the `this.props.animals`
//             collection that was passed down from ApplicationViews
//         */
//         const animal = this.props.articles.find(a => a.id === parseInt(this.props.match.params.articleId)) || {}

//         return (
//             <section className="article">
//                 <div key={article.id} className="card">
//                     <div className="card-body">
//                         <h4 className="card-title">
//                             {/* <img src={dog} className="icon--dog" />
//                             {animal.name} */}
//                         </h4>
//                         <h6 className="card-title">{article.title}</h6>
                       
                        
//                         <a href="#"
//                             onClick={() => this.props.deleteAnimal(animal.id)
//                                             .then(() => this.props.history.push("/animals"))}
//                             className="card-link">Delete</a>

//                             <a href="#"
//                             onClick={() =>  this.props.history.push(`/animals/Edit/${animal.id}`)}
                        
//                                 className="card-link">Edit</a>

//                     </div>
//                 </div>
//             </section>
//         )
//     }
// }