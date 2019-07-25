import React, { Component } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { signin } from "../actions/auth"
// const isLoggedIn = useSelector(state => state.loggedReducer)

function Loginsubmit(username){
    const dispatch = useDispatch()
    const onSubmit = (e) =>{
        const user = {
            username: username.username,
            password : username.password
        }
        e.preventDefault();
        axios.post("http://localhost/auth/login", user)
            .then(response => (
                console.log(response.data),
                dispatch(signin(user.username))
                ))
            .catch(err => console.log(err))
    }
    return(
        <div style={{width:70 +"px", margin: 0 +"auto"}} className="mt-4">
            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Log in</button>
        </div>
    )
}

function IsLoggedOn(){
    const isLoggedIn = useSelector(state => state.loggedReducer)
    if(isLoggedIn.isLoggedIn){
        return (
            <h1 className="mt-5">You are already logged in as : {isLoggedIn.username}</h1>
        )
        } else if(!isLoggedIn.isLoggedIn){
            return(
                <h1 className="mt-5">Log in please</h1>
            )
    }
}

class login extends Component {
    constructor(props){
        super(props)
        this.state={
            username: "",
            password: ""
        }
    }
    onChangeUsername= (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    } 
    render() { 
        return (  
            
            <div className="container mt-5">
                <IsLoggedOn />
                <form className="login_form" action="/auth/login" method="POST" >          
                    <div className="form-group field-login" style={{width:30+"%", margin: 0 +"auto"}}>
                        <label htmlFor="username" className="control-label">Email</label>
                            <input type="text" name="username" id="login" className="form-control" required="required" value={this.state.username} autoFocus="autofocus" onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group field-password" style={{width:30+"%", margin: 0+ "auto"}}>
                        <label htmlFor="password" className="control-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control" value={this.state.password} required="required" onChange={this.onChangePassword} />
                    </div>
                    <input type="hidden" name="redirect" value="/web?" />
                    <Loginsubmit username={this.state.username} password={this.state.password} />

                </form>
            </div>
        );
    }
}
 
export default login;