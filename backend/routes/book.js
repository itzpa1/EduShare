const router = require("express").Router();
const User = require('../models/user');
const jwt = require("jsonwebtoken");
const Book = require("../models/book")
const { authenticateToken } = require("./userAuth");

// add book -admin
router.post("/add-book", authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        if (user.role !== "admin") {

            res.status(400).json({ message: "You don't have admin access!" });
        }
        const book = new Book({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            language: req.body.language,
            pages: req.body.pages,
            isbn: req.body.isbn,
            desc: req.body.desc,
            form: req.body.form,
            price: req.body.price,
        });
        await book.save();
        res.status(200).json({ message: "Book added successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
        // res.status(500).json({message: "Internal Server Error"});
    }
});


// update book
router.put("/update-book", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.headers;
        await Book.findByIdAndUpdate(bookid, {
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            language: req.body.language,
            pages: req.body.pages,
            isbn: req.body.isbn,
            desc: req.body.desc,
            form: req.body.form,
            price: req.body.price,
        });

        res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occured!" });
    }
})


// delete book
router.delete("/delete-book", authenticateToken, async (req, res) => {
    try {
        const { bookid } = req.headers;
        await Book.findByIdAndDelete(bookid);

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occured!" });
    }
})


// get all book
router.get("/get-books", async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json({ status: "Success", data: books, });
    } catch (error) {
        res.status(500).json({ message: "An error occured!" });
    }
})


// get recents book
router.get("/get-recent-book", async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 }).limit(4);
        res.json({ status: "Success", data: books, });
    } catch (error) {
        res.status(500).json({ message: "An error occured!" });
    }
})


// get book by id
router.get("/get-book-by-id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const books = await Book.findById(id);
        res.json({ status: "Success", data: books, });
    } catch (error) {
        res.status(500).json({ message: "An error occured!" });
    }
})

module.exports = router;