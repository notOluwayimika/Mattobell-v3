import React, { Component } from 'react';
import { Link} from "react-router-dom"
import axios from "axios"

const BlogsExist = (props) => {
    if(props.currentState.blogs.length>0){
        return ( 
            <div>
            <section className="title_small mb-0 bg-white d-block">
                        <div 
                        className="text-center" 
                        id="allblogsbackground" 
                        style = {{
                            backgroundImage: "url("+props.currentState.blogs[props.currentState.blogs.length-1].imageurl+")",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition:"center"
                        }} >
                            <h3 className="pt-5 text-white">latest blog</h3>
                            <h1 className="text-white mb8"><strong>{props.currentState.blogs[props.currentState.blogs.length-1].title}</strong></h1>
                            <hr id="allblogshr" />
                            <h4 className="text-white mt-3"><Link to={"/blog/"+ props.currentState.blogs[props.currentState.blogs.length-1].category} >In {props.currentState.blogs[props.currentState.blogs.length-1].category}</Link></h4>
                            <Link className="btn btn-lightgrey mt-5 text-white pl-5 pr-5" to={"/blog/"+props.currentState.blogs[props.currentState.blogs.length-1].category+"/"+props.currentState.blogs[props.currentState.blogs.length-1]._id} >Read</Link>
                        </div>
                    </section>   
                    
                    </div>        
         );
    } else {
        return (
            <div className="text-center"><h1>There are currently no blogs</h1></div>
        )
    }
    
}
 

class allblogs extends Component {
    constructor(props){
        super(props)
        this.state = {
            blogs : []
        }
    }
    componentDidMount(){
        axios.get("http://localhost/blog")
            .then(res =>(this.setState({
                blogs: res.data
            })))
            .catch(err => console.log(err))
    } 
    render() { 
        return ( 
                <div className="mt-5">
                    <BlogsExist currentState={this.state} />
                    <section className="bg-white pb-5 pt-3">
                        <div className ="container text-center"><p className="text-center text-info">Explore Categories</p>
                            <div className="row">
                                
                                <ul className="o_tab_nav" role="tablist" style={{maxWidth: 700+"px"}} >
                                    <li className="active">
                                        <Link to="/blog">All Blogs</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/erpTrendNews">ERP Trend News</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/caseStudies">Case Studies</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog/odooHowTo" >Odoo How To</Link>
                                    </li>
                                </ul>
                            </div>    
                        </div>     
                    </section> 
                    <section className="lightgreybg">
                        <div className="container pt-5">
                            <div className="row justify-content-between">
                                {this.state.blogs.map(blog=>
                                    <div key={blog._id} className="col-md-4 mb-5">
                                        <div className="card" style={{width: 90+"%", height: 100+"%"}} >
                                            <Link to={"/blog/"+blog.category+"/"+blog._id}><img src={blog.imageurl} alt="" style={{width:100+"%", height: 183+"px"}} /></Link>
                                            <div className="card-body">
                                                <Link to={"/blog/"+blog.category+"/"+blog._id}>
                                                    <h5 className="card-title" style={{textTransform:"uppercase"}}><strong>{blog.title}</strong></h5></Link>
                                                    <hr />
                                                    <p><span className="float-left text-secondary d-inline">{blog.date.toString().slice(0,10)}</span> <span className="float-right d-inline">in <span className="text-info"><Link to={"/blog/"+blog.category}>{blog.category}</Link></span></span></p>
                                                
                                            </div>
                                        </div>
                                    </div>   
                                )}
                            </div>    
                        </div>    
                    </section>    
                </div>
         );
    }
}
 
export default allblogs;