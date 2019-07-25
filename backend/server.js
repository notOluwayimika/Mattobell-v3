const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const localStrategy = require("passport-local"); 
const blogRoutes = require("./routes/blogRoutes/blogRoutes");
const shopRoutes = require("./routes/shopRoutes/shopRoutes");
const pageRoutes = require("./routes/pageRoutes/pageRoutes")
const User = require("./models/users/users");
const methodOverride = require("method-override")
const authRoutes = require("./routes/authRoutes/authRoutes")
const session = require("express-session")

mongoose.connect("mongodb://localhost:27017/mattobellv3", {useNewUrlParser: true})
const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("MongoDb Database connection succesful")
})
const port = process.env.port || 80

app.use(session({
    secret: "ODOO Mattobell SME v3",
    resave : false,
    saveUninitialized: true,
    // cookie: {secured : true, maxAge: 60000},
    // name: "session cookie",
    // genid: function(req) {
    //     return genuuid() 
    //   }
}))

app.use(express.static(__dirname + "/public"));

app.use(passport.initialize());
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(methodOverride("_method"));

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.json(authRoutes.user)
});
app.get("/jobs", (req,res) => {
    res.json("available jobs")
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use("/blog", blogRoutes)
app.use("/page", pageRoutes)
app.use("/shop", shopRoutes)
app.use("/auth", authRoutes)

app.listen(port,() => {
    console.log("Server is Running")
})