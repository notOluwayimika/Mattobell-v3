import React, { Component } from 'react';
import axios from "axios"

class contactform extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "",
            number: "",
            email: "",
            company: "",
            subject:"",
            enquiry: "",
            contactformsent: ""
        }
    }

    clearform = () => {
        this.setState({
            name: "",
            number: "",
            email: "",
            company: "",
            subject: "",
            enquiry: "",
            contactformsent: "Your form has been sent"
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const enquiry={
            name: this.state.name,
            phone: this.state.number,
            email: this.state.email,
            company: this.state.company,
            subject: this.state.subject,
            message: this.state.enquiry
        }
        axios.post("http://localhost/page/contactus", enquiry)
            .then(res => (
                console.log(res.data), 
                this.clearform()
                ))
            .catch(err => console.log(err))
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value,
            contactformsent: ""
        })
    }

    onChangePhone = (e) => {
        this.setState({
            number: e.target.value,
            contactformsent: ""
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
            contactformsent: ""
        })
    }

    onChangeCompany = (e) => {
        this.setState({
            company: e.target.value,
            contactformsent: ""
        })
    }

    onChangeSubject =(e) => {
        this.setState({
            subject: e.target.value,
            contactformsent: ""
        })
    }

    onChangeEnquiry = (e) => {
        this.setState({
            enquiry: e.target.value,
            contactformsent: ""
        })
    }

    render() { 
        return ( 
            <div className=" container mt-5">
            <div className="row">
                <div className="col-sm-8">
                    <h3 className="text-white">Contact Us</h3>
                    <p className = "text-white">Contact us about anything related to our company or services.</p>
                    <p className="text-white">We'll do our best to get back to you as soon as possible.</p>
                    <form action="/page/contactus" method="POST" >
                        <div className="form-group ">
                            <label className="col-md-3 col-sm-4 control-label" htmlFor="name">Your Name</label>
                            <div className="col-md-7 col-sm-8">
                                <input type="text" className="form-control" name="name" onChange={this.onChangeName} required="True" value={this.state.name} />
                            </div>
                        </div>
                        <div className="form-group ">
                            <label className="col-md-3 col-sm-4 control-label" htmlFor="phone">Phone Number</label>
                            <div className="col-md-7 col-sm-8">
                                <input type="text" className="form-control" name="phone" onChange={this.onChangePhone} value={this.state.number} />
                            </div>
                        </div>
                        <div name="email_from_container" className="form-group ">
                            <label className="col-md-3 col-sm-4 control-label" htmlFor="email_from">Email</label>
                            <div className="col-md-7 col-sm-8">
                                <input type="email" className="form-control" name="email" onChange={this.onChangeEmail} required="True" value={this.state.email} />
                            </div>
                        </div>
                        <div className="form-group ">
                            <label className="col-md-3 col-sm-4 control-label" htmlFor="company">Your Company</label>
                            <div className="col-md-7 col-sm-8">
                                <input type="text" className="form-control" name="company" required="True" onChange={this.onChangeCompany} value={this.state.company} />
                            </div>
                        </div>
                        <div className="form-group ">
                            <label className="col-md-3 col-sm-4 control-label" htmlFor="subject">Subject</label>
                            <div className="col-md-7 col-sm-8">
                                <input type="text" className="form-control" name="subject" onChange={this.onChangeSubject} value={this.state.subject} />
                            </div>
                        </div>
                        <div className="form-group ">
                            <label className="col-md-3 col-sm-4 control-label" htmlFor="message">Your Enquiry</label>
                            <div className="col-md-7 col-sm-8">
                                <textarea className="form-control" name="message" style={{minHeight: 120+"px"}} onChange={this.onChangeEnquiry} required="True" value={this.state.enquiry}></textarea>
                            </div>
                        </div>
                        <div style={{width:60 +"%"}}>
                            <div style={{width:80 +"px", margin:0 +" auto"}}>
                                <button className="btn btn-primary btn-lg" onClick={this.onSubmit}>Send</button>
                            </div>
                        </div>
                        </form>
                        <h2>{this.state.contactformsent}</h2>
            </div>
            <div className="col-sm-4 pt-5 text-white">
                <p>Matt O'Bell Ltd</p>
                <p><i className="fas fa-map-marker-alt"></i>73 Allen Avenue</p>
                <p>Ikeja LG</p>
                <p>Nigeria</p>
                <p><i className="fas fa-phone"></i>+234 (1) 6326200</p>
                <p><i className="fas fa-envelope"></i>erp@mattobell.com</p>
                <div id="map"></div>
		    </div>
            </div>
        </div>
         );
    }
}
 
export default contactform;
