import React, { Component } from 'react';
import{ Link } from "react-router-dom"
import logo from "../images/logo.png"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { signout } from "../actions/auth"


// import $ from "jquery/dist/jquery.min.js"
function IsLoggedBlog(){
    const isLoggedIn = useSelector(state => state.loggedReducer)
    const dispatch=useDispatch()
    const logOut = () => {
        axios.get("http://localhost/auth/logout")
        .then(res => console.log(res.data))
    dispatch(signout())
    }
    if(isLoggedIn.isLoggedIn){
        return (
            <React.Fragment>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/blog" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Blog
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/blog">All Blogs</Link>
                            <Link className="dropdown-item" to="/blog/erpTrendNews">ERP Trends / News</Link>
                            <Link className="dropdown-item" to="/blog/odooHowTo">Odoo How To</Link>
                            <Link className="dropdown-item" to="/blog/caseStudies">Case Studies</Link>
                            <Link className="dropdown-item" to="/blog/new">New Blog Post</Link>
                            <Link className="dropdown-item" to="/blog/blogCommentAuthentication">Comment Approvals</Link>	
                        </div>
                    </li>
                    <li className = "nav-item">
                        <span className="text-dark nav-link">Logged in as {isLoggedIn.username}</span>
                    </li>
                    <li className = "nav-item">
                        <button onClick={logOut} className="btn btn-none nav-link">Log out</button>
                    </li>
                </React.Fragment>
            )
        } else if (!isLoggedIn.isLoggedIn){
            return (
                <React.Fragment>
                    <li className="nav-item">
                    <Link className="nav-link" to="/blog" id="navbarDropdown">
                        Blog
                    </Link></li>
                    <li className = "nav-item">
                                <h6 className="nav-link disabled" > | </h6>
                            </li>
                            <li className = "nav-item">
                                <Link to="/web/login" className="nav-link">Sign-in</Link>
                            </li>
                            <li className = "nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                </React.Fragment>
            )
        }
    }

 
class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: this.props.currentUser
        }
    }


    


    render() { 
        return ( 
            <div>
                <nav id="topbar" className="navbar navbar-expand-lg navbar-light text-white fixed-top topbar">
                    <Link id="logoimglink" className="navbar-brand" to="/">
                        <img id="navbarlogo" src={logo} alt="company logo" /> 
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto mr-5 default-text d-flex">
                            <li className="nav-item">
                                <Link to="/" className="nav-link ">
                                    Home
                                </Link> 
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/shop" className="nav-link dropDownToggle" id="navbarDropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/shop/new" className="dropdown-item">New Item</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Training</Link>
                             </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Forum</Link>
                            </li>
                            <li className = "nav-item">
                                <Link to="/" className="nav-link ">Help Desk</Link>
                            </li>
                            <li className = "nav-item">
                                <Link to="/page/contactus" className="nav-link navbarItems">Contact Us</Link>
	                        </li>
	 
	                        <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    About Us
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/page/our-company">Our Company</Link>
                                    <Link className="dropdown-item" to="/page/portfolio">Our Clients</Link>
                                    <Link className="dropdown-item" to="/page/our-services">Our Services</Link>
                                </div>
                            </li>
                            <IsLoggedBlog user={this.state.currentUser} />
                            
                            

                        </ul>
                    </div>
                </nav>
            </div>
         
        
         

        
        );
    }
}
 
export default Navbar;