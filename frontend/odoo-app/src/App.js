import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar"
import homePage from "./components/homepage"
import register from "./components/register"
import login from "./components/login"
import contactform from "./components/contactus"
import allBlogs from "./components/allblogs"
import showblog from "./components/showblog"
import newBlog from "./components/newBlog"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"
import axios from 'axios';
// import "./script"
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currentUser : ""
    }
  }
  componentDidMount = () => {
    axios.get("http://localhost/")
      .then(res => this.setState({
        currentUser : res.username
      }))
  }
  componentDidUpdate = () => {
    axios.get("http://localhost/")
      .then(res => this.setState({
        currentUser : res.username,
  }))}
  render() { 
    return ( 
      <div>
      <Router>
        <Navbar currentUser={this.state.currentUser} />
        <br />
        <Route path = "/" exact component ={homePage} />
        <Route path ="/register" component={register} />
        <Route path ="/web/login" component = {login} />
        <Route path ="/page/contactus" component = {contactform} />
        <Route path ="/blog" exact component = {allBlogs} />
        <Route path ="/blog/:category/:id" exact component={showblog} />
        <Route path="/blog/new" exact component={newBlog} />
      </Router>
    </div>
     );
  }
}
 
export default App;
