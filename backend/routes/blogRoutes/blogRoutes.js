const router = require("express").Router();
const User = require("../../models/users/users");
const Blog = require("../../models/blogs/blogs");

const Comment = require("../../models/comments/comments")
const UnAuthComment = require("../../models/comments/unauthcomments")
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
//seedDB();
cloudinary.config({cloud_name: "mattobell",api_key: 131554579838417,api_secret: "oxvRN-DOFwxp_mGDq8hKkUuSxqw"});
const storage = cloudinaryStorage({cloudinary: cloudinary,folder: "demo",allowedFormats: ["jpg", "png", "jpeg"],transformation: [{ width: 500, height: 500, crop: "limit" }]});
const parser = multer({ storage: storage });

router.route("/erpTrendnews").get((req, res) => {
    Blog.find({category: "erpTrendNews"})
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json("Error: " + err))
});
router.route("/odooHowTo").get((req, res) => {
    Blog.find({category: "odooHowTo"})
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json("Error: " + err))
});
router.route("/caseStudies").get((req, res) => {
    Blog.find({category: "caseStudies"})
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/new").get((req, res) => {
    if(req.body.tags){
        tags = req.body.tags.toString()
    } else {
        tags = ""
    }
    const today = new Date();
	const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	const dateTime = date + ' ' + time
    let imageUrl
    if(req.file){
        imageUrl = req.file.url
    } else {
        imageUrl = "/images/siteicons/blognoimage.png"
    }

    const newBlog = new Blog({
        title : req.body.title,
        category: req.body.category,
        author : req.user.username,
        tags : tags,
        content : req.body.content,
        date: dateTime.toString()
    })
    newBlog.save()
        .then(() => res.json("blog added"))
        .catch(err => res.status(400).json("Error: " + err))//redirect somewhere
})

router.route("/:category/:id").get((req, res) => {
    Blog.findById(req.params.id).populate("comments")
        .exec(function(err, blog){
            if(err){
                console.log(err)
            } else {
                res.json(blog)
            }
        })
})

router.route("/:category/:id/comment").post((req, res) => {
    const today = new Date();
	const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();		
	const dateTime = date + ' ' + time
	const blog_id = req.params.id
	let name, email=req.body.email, comment;
    comment = req.body.comment
    name = req.body.username;
        User.findOne({username: name})
            .then(user => email= user.email)
            .catch(err => (email=req.body.email,res.status(400).json("Error: " + err)))
        const newComment = {
            name : name,
            email: email,
            comment: comment,
            blog_id : blog_id,
            date: dateTime.toString()
        }
        Blog.findById(req.params.id, function(err, blog){
            if(err){
                console.log(err)
            } else{
                Comment.create(newComment, function(err, comment){
                    if(err){
                        console.log(err)
                    } else{
                        blog.comments.push(comment);
                        blog.save();
                        res.redirect("/blog/" + req.params.category + "/" + req.params.id)
                    }
                })
            }
        })

    }
)

router.route("/:category/:id/authcomment").post((req, res) => {
    const unauthid = req.body.id
    const today = new Date();
	const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();		
	const dateTime = date + ' ' + time
	const blog_id = req.params.id
	let name, email, comment;
    comment = req.body.comment;
    name = req.body.name;
    email = req.body.email;
    const newComment = new UnAuthComment({
        name: name,
        email: email,
        comment: comment,
        blog_id: blog_id,
        date: dateTime.toString()
    })
    UnAuthComment.findByIdAndRemove(unauthid)
        .then(() =>{
            res.json("blog deleted")
        })
        .catch(err => res.status(400).json("Error: " + err))

    Blog.findById(req.params.id)
        .then(blog => blog.comments.push(comment))
            .then(blog.save(), res.json("comment added"))
        .catch(err => res.status(400).json("Error: " +err))
})

router.route("/:category/:id/unauthcomment").post((req, res) => {
    const today = new Date();
	const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();		
	const dateTime = date + ' ' + time,
		blog_id = req.params.id,
		category= req.params.category
	let name, email, unauthcomment;
	unauthcomment = req.body.comment
		name = req.body.username;
		User.findOne({username: name}, function(err, user){
			if(err){
                console.log(err)
                email= req.body.email
			} else{
				email = user.email;	
			}
				
		});
    
    const newComment = new unauthcomment({
        name: name,
        email: email,
        comment: unauthcomment,
        blog_id: blog_id,
        category:category,
        date: dateTime.toString()
    })
    newComment.save()
        .then(() => res.json("comment added"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/blogCommentAuthentication").get((req,res) => {
    unAuthComment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/:category/:id/edit").get( (req,res) => {
    const currentUser = req.user.username;
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:category/:id").delete((req, res) => {
    Blog.findByIdAndRemove(req.params.id)
        .then(() => res.json("removed blog"))
})

router.route("/:category/:id").put((req, res) =>{
    if(req.body.tags){
        tags = req.body.tags.toString()
    } else{ 
        tags = ""
    }
    changes = {
        name: req.body.name,
        content: req.body.content,
        category: req.body.catregory,
        tags: tags
    }
    Blog.findByIdAndUpdate(req.params.id, changes)
        .then(() => res.json("updated blog"))
})

router.route("/:category/:id/:commentId").delete((req, res) => {
    Comment.findByIdAndRemove(req.params.commentId)
        .then(() => res.json("comment deleted"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:category/:id/:commentId/unauthcomments").delete((req, res) => {
    unAuthComment.findByIdAndRemove(req.params.commentid)
        .then(() => res.json("comment deleted"))
        .catch((err) => res.status(400).json("Error: " + err))
})

router.route("/:category/:id/:commentid").put( (req, res) => {
    const changes = {
        comment: req.body.comment,
    }
    const category = req.params.category;
    const blogid =req.params.id;
    Comment.findByIdAndUpdate(req.params.commentId, changes)
        .then(() => res.json("comment updated"))
})

router.route("/:category/:id/:commentid/unauthcomments").put( (req, res) => {
    const changes = {
        comment: req.body.comment
    };
    unAuthComment.findByIdAndUpdate(req.params.commentid)
        .then(()=> res.json("successfully updated comment"))
        .catch(err => res.status(400).json("Error: " + err))
})
router.route("/").get((req, res) => {
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json("Error: " + err))
})

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next()
	}
	res.json("login failed")
}
function isAdmin(req, res, next){
	if(req.user){
		if(req.user.username === "administration"){
			next()
		}	
	}else{
		res.json("you aren't an admin,and therefore dont have the permission to do so")
	}
}
function isOwner(req, res, next){
	if(req.isAuthenticated()){
		Blog.findById(req.params.id, function(err, blog){
			if(req.user.username === blog.author || req.user.username ==="administration"){
				if(err){
				console.log(err);
				}
				else{
					return next()
				}
			}
			else{
				res.json("You dont own this blog")
			}
			});
			}
	else{
		console.log("log in")
		res.json("You need to be loggedin to view this")
	}
}
module.exports = router