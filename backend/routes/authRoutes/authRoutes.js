const router= require("express").Router()
const passport = require("passport")
User = require("../../models/users/users")
router.route("/register").post((req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email
    })
    User.register(newUser, req.body.password)
        .then(user => (passport.authenticate("local"), res.json("just added " + user.username )))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/login").post(passport.authenticate("local"), (req, res) => {
    req.session.user = {
        username: req.body.username,
    }
    res.json("logged in succesfully")
})

router.route("/logout").get((req, res) => {
    req.logout();
    res.json("you have been logged out")
})

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next()
	}
	res.json("login failed")
}

module.exports = router