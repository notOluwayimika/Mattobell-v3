const router = require("express").Router();
const nodemailer = require("nodemailer")
//model
const Client = require("../../models/clients");

//
// most page routes dont have server side code, 
//so would be rendered
// on the react side
//

router.route("/portfolio").get((req, res) => {
    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/contactus").post((req, res) => {
	const auth = {
		type:"oauth2",
		user:"yimzika@gmail.com",
		clientId: "707220690652-ccbo9r15sua26quk7pj0s8ntbjt3bt6d.apps.googleusercontent.com",
		clientSecret: "H9IvMWmzaNdp6sRyFEMXqrKQ",
		refreshToken: "1/Q8lwkgBW3RGe8OVyXcXdUlNcB9gPQ2BhW04nQsMCr4Y"
	}

	var name = req.body.name,
		email = req.body.email,
		message = req.body.message,
		subject = req.body.subject,
		phone = req.body.phone,
		company = req.body.company
	const text = " <h3>A new lead: " + name + " from :" + company + "says: </h3><br><h2>" + subject + " : </h2><br>" + message + "<br> contact info: <br>" + "<strong>Email:</strong>" + email + "<br> <strong>tel no:</strong> " + phone 
	const from =name + " from " + company +"<" +email+">"
	let mailOpts, smtpTrans;
	smtpTrans = nodemailer.createTransport({
		host: "smtp.gmail.com",
		secure: false,
		auth: {
			user: "yimzika@gmail.com",
			pass: "Nigeria01"
		}
	});
	
	mailOpts = {
		from: from ,
		to: "yimzika@gmail.com",
		subject: "New enquiry from contact form at Mattobell.com",
		html: text
	}
	smtpTrans.sendMail(mailOpts, (err, response) => {
		if(err){
			console.log(err)
		} else {
			res.json(response)
		}
	})
      
});

//remaining routes

module.exports = router