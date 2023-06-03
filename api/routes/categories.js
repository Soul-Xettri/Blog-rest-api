const router = require("express").Router();
const Category = require("../modules/category");

//create categories
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

//get categories
router.get("/", async (req, res) => {
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});



module.exports = router