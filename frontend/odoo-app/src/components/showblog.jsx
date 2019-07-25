import React, { Component } from 'react';
import axios from "axios"
import{ Link } from "react-router-dom"
import { useSelector } from "react-redux"

const CommentSection = (props) => {
    const isLoggedIn = useSelector(state => state.loggedReducer)
    const deleteComment = (e) =>{
        e.preventDefault()
        const link ="http://localhost/blog/" + props.currentState.category +"/"+props.currentState._id +"/" + e.target.value
        axios.delete(link)
            .then(res => console.log(res.data))
            .catch(err => console.log("Error: " + err))
    }
    const submitComment = (e) => {
        const clearContents = (element) =>{
            element.value=""
        }
        if(isLoggedIn.isLoggedIn){
            if(e.key === "Enter"){
                const link = "http://localhost/blog/"+ props.currentState.category +"/"+props.currentState._id +"/comment"
                const commentinfo = {
                    username:isLoggedIn.username,
                    comment: e.target.value
                }
                if (e.target.value!== ""){
                    axios.post(link, commentinfo)
                        .then(res => (clearContents(e),console.log(res.data)))
                        .catch(err => console.log("Error: " + err))
                    // return <Redirect to='/' />
                }
            }
        }
    }

    if(isLoggedIn.isLoggedIn){
        return (
            <React.Fragment  >
                    <label htmlFor="comment" className="inp">
                        <textarea id="text" placeholder="Enter your comment here, press enter to submit" name="comment" cols="120" onKeyPress={submitComment} className="commenttextarea"></textarea>
                    </label>
                <div className="container pt-5" style={{backgroundColor: "white"}} >
                    <div className="row" id="commentArea">
                        <div className="col-sm-12" style={{width: 100+"%"}} >
                            {props.currentState.comments.map(comment => 
                                <div key={comment._id} className="commentArea mb-5">
                                    <p>
                                        <span style={{fontSize:1.2+'rem'}} className="commenter"><strong>{comment.name}</strong><br /> <span>{comment.comment}</span></span>
                                    </p>
                                    <div style={{width:100+'%'}}>
                                        <span className="float-left">
                                            <button className="text-primarylikebutton">
                                                <i className="far fa-thumbs-up"></i>Like
                                            </button>
                                            <button className="commentreplybutton"><strong>REPLY</strong></button>
                                            <button value={comment._id} onClick={deleteComment} className="text-danger commentbutton"><strong>Delete</strong></button>
                                            <button className="editcommentbutton text-warning commentbutton mb-5"><strong><Link to={"/blog/"+props.currentState.category + "/"+ props.currentState._id+"/"+comment._id+"/edit"}>EDIT</Link></strong></button>
                                        </span>
                                        <span className="float-right">comment.date</span>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div>
                                        <div className="d-none reply">
                                            <textarea placeholder="Enter a comment here, press enter to submit your comment"></textarea>
                                        </div>    
                                    </div> 
                                </div>)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    } else {
        return(
            <div>Hi goix
                </div>
            
        )
    }
}

const CanEditBlog = (props) => {
    const isLoggedIn = useSelector(state => state.loggedReducer)
    const deleteBlog = (e) => {
        e.preventDefault()
        axios.delete("http://localhost/blog/"+props.category+"/"+props._id)
            .then(res=> console.log(res.data))
            .catch(err=> console.log(err))
    }
    if(isLoggedIn.isLoggedIn){
        return ( 
            <div className="container text-right mt-5" >
                <div className="btn-group mt-3">
                    <Link className="btn btn-warning" to={"/blog/"+props.category+"/"+props._id+"/edit"}>Edit Blog</Link>
                    <button value={props.blog._id} onClick={deleteBlog} id="clear_cover" className="btn btn-danger"><span>Delete Blog<i className="fa fa-times"></i></span></button>
                </div>
            </div>
         );
    } else {
        return(
            <span></span>
        )
    }
    
}
 

class showblog extends Component {
    constructor(props){
        super(props)
        this.state={
            blog: "",
            category:"",
            author:"",
            content: "",
            imageurl:"",
            date: "",
            comments: [],
            _id: "",
            compupdate: false
        }
    }

    componentDidUpdate(){
        const category = this.props.match.params.category
        const id =this.props.match.params.id
        axios.get("http://localhost/blog/"+category+"/"+id)
            .then(res => (this.setState({
                blog : res.data.title,
                category: res.data.category,
                author:res.data.author,
                content: res.data.author,
                imageurl: res.data.imageurl,
                date:res.data.date,
                comments: res.data.comments,
                _id: res.data._id
            })))
    }

    componentDidMount(){
        const category = this.props.match.params.category
        const id =this.props.match.params.id
        axios.get("http://localhost/blog/"+category+"/"+id)
            .then(res => (this.setState({
                blog : res.data.title,
                category: res.data.category,
                author:res.data.author,
                content: res.data.author,
                imageurl: res.data.imageurl,
                date:res.data.date,
                comments: res.data.comments,
                _id: res.data._id
            })))
    }
    render() { 
        return ( 
            <div className ="bgwhite" >
                <div className="cover js_fullheight" id="title" style={{
                    backgroundImage: this.state.imageurl,
                    minHeight: 827+"px",
                    backgroundRepeat:"no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition:"top",
                    backgroundColor: "black"
                }} >
                    <CanEditBlog blog={this.state.blog} category={this.state.category} author={this.state.author} content={this.state.content} imageurl={this.state.imageurl} date={this.state.date} _id={this.state._id} />
                    <div className="blog-title text-center pt-5 mt-4" >
                        <h1 id="blog-title" className="text-white">{this.state.blog}</h1>
                        <h3 className="text-white">Subtitles</h3>
                        <p className="post-meta text-muted text-center" name="blog_post_data"></p>
                        <div>
                            <span><img alt="" className="img img-responsive img-circle" src="#" 
                            style={{width: 30+"px",
                                marginRight:10+"px",
                                display:"inline",
                                borderRadius:50+"%"}}
                            /></span>
                            <div id="blog_angle_down">
                                <strong><button className="btn btn-none" id="clickToScroll"><i className="fas fa-chevron-down" style={{fontSize:2.5+"rem"}}></i></button></strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container" style={{height:100+"px"}}>
                        <div className="col-md-6 mt-16" id="contentToScrollTo" style={{height:100+"%", marginTop:100+"px"}}>
            
                        </div>
                        <div className="mt-5 pt-5" style={{marginTop:150+"px", fontSize:1.2+"rem"}}>
                            {this.state.content}
                        </div>
                        <button type="button" className="likebutton text-primary"> <i className="far fa-thumbs-up"></i></button>
                    </div>
                    <hr className="mb-5 mt-5" />
                    <div className="commentSection">
                        <CommentSection currentState={this.state}/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default showblog;