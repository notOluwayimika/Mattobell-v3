const router = require("express").Router()

const Shop = require("../../models/shopInventory/shopInventory")

const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
cloudinary.config({cloud_name: "mattobell",api_key: 131554579838417,api_secret: "oxvRN-DOFwxp_mGDq8hKkUuSxqw"});
const storage = cloudinaryStorage({cloudinary: cloudinary,folder: "demo",allowedFormats: ["jpg", "png", "jpeg"],transformation: [{ width: 500, height: 500, crop: "limit" }]});
const parser = multer({ storage: storage });

let cart=[

]

router.route("/").get((req, res) => {
    if(req.query.search){
        var finalitems = []
        var search = req.query.search.toLowerCaer()
        Shop.find()
            .then(items => items.forEach(item => {
                let lowcasename = item.eventNames.toLowerCase()
                if(lowcasename.includes(search)){
                    finalitems.push(item)
                }
            }),
            res.json(finalitems)
            )
            .catch(err => res.status(400).json("Error: " + err))
    } else {
        Shop.find()
            .then(items => res.json(items))
            .catch(err => res.status(400).json("Error: " + err))
    }
});

router.route("/:category").get((req, res) => {
    Shop.find({category : req.params.category})
        .then(items => res.json(items))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/:category/:subcategory").get((req, res) => {
    Shop.find({subCategory: req.params.subcategory})
        .then(items => res.json(items))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/new").post(parser.single("image"),(req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;
    const subcategory = req.body.subcategory;
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    let imageUrl;
    if(req.file){
        imageUrl = req.file.url
    } else {
        imageUrl = "/images/siteicons/blognoimage.png"
    }
    const newItem = new Shop({
        name: name,
        category : category,
        price: price,
        subcategory: subcategory,
        imageUrl: imageUrl,
        date: dateTime.toString()
    });
    newItem.save()
        .then(() => res.json("item added"))
        .catch(err => res.status(400).json("Error: " + err))
});

router.route("/:productid").get((req, res) => {
    Shop.findById(req.params.productid)
        .then(items => res.json(items))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/cart").post((req, res) => {
    const product_id = req.body.product_id
    const qty = parseInt(req.body.qty)
    cart.forEach((e,i) => {
        if(e.product_id === product_id){
            qty += e.qty;
            cart.splice(i, 1)
        }
    })
    if(req.body.sub ==="contshop"){
        let cartItem
        Shop.findById(product_id)
            .then(item => cartItem = {
                name: item.name,
                qty: qty,
                imageurl: item.imageurl,
				category: item.category,
				subcategory:item.subcategory,
				product_id:item_id
            }, cart.push(item), res.json("added to cart"))
            .catch(err => res.status(400).json("Error: " + err))
    } else if (req.body.sub === 'checkout'){
        let product
        Shop.findById(product_id)
            .then(item => product= {
                name: item.name,
                qty: qty,
                price: item.price,
                imageUrl : item.imageUrl,
                category: item.category,
                subcategory: item.subCategory,
                product_id: produc_tid
            }, cart.push(item),
            res.json("added to cart"))
            .catch(err => res.status(400).json("Error: " + err))
    } else {
        res.json("item couldnt be added to cart")
    }
});



function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router