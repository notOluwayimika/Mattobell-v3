import React, { Component } from 'react';
import axios from "axios"
class register extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.state = {
            username: "",
            password: "",
            email: "",
        }
    }

    onChangeUsername =(e) => {
        this.setState({
            username: e.target.value
        })
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            "username": this.state.username,
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post("http://localhost/auth/register", user)
            .then(res => console.log(res.data))
        window.location="/"
    }
    render() { 
        return (
            <div>
                <div className="container" >

                    <form action="/register" method="POST" className="login_form mt-5">
                        <div className="form-group " style={{width: 30+"%", margin: 0 + " auto"}}>
                                        <label htmlFor="username" className="control-label text-white">Username</label>
                                        <input type="text" name="username" id="username" className="form-control" required="required" autoFocus="autofocus" onChange={this.onChangeUsername} value={this.state.username} />
                        </div>
                        <div className="form-group " style={{width: 30+ "%", margin: 0 + " auto"}}>
                                <label htmlFor="email" className="control-label text-white">Email</label>
                                <input type="email" name="email" id="email" className="form-control" required="required" autoFocus="autofocus" onChange={this.onChangeEmail} value={this.state.email} />
                        </div>
                        <div className="form-group " style={{width: 30+"%", margin: 0 + " auto"}}>
                                <label htmlFor="password" className="control-label text-white">Password</label>
                                <input type="password" name="password" id="password" className="form-control" required="required" autoFocus="autofocus" onChange={this.onChangePassword} value={this.state.password} />
                        </div>

                    <div style={{width: 100+"px", margin: 0 + " auto"}}>
                        <button className="btn btn-info mt-3" onClick={this.onSubmit}>Sign up!</button>
                    </div>

                    </form>

                </div>
            </div>
          );
    }
}
 
export default register;