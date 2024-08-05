const router = require("express").Router();
const User = require('../models/user');
const { authenticateToken } = require("./userAuth");

// add book to favourite
router.put("/add-favourite-book", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if (isBookFavourite) {
            return res.status(200).json({ message: "Book is already in favourites" })
        } else {
            await User.findByIdAndUpdate(id, { $push: { favourites: bookid } });
            return res.status(200).json({ message: "Book is added to favourites" })

        }
    } catch {
        res.status(500).json({ message: "Internal server Error" })
    }
});


// remove book from favourite
router.delete("/remove-favourite-book", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if (isBookFavourite) {
            await User.findByIdAndUpdate(id, { $pull: { favourites: bookid } });
        }

        return res.status(200).json({ message: "Book is removed from favourites" })

    } catch {
        res.status(500).json({ message: "An error occured" })
    }
});


// get favourite books of a particular user 
router.get("/get-favourite-books", authenticateToken, async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id).populate("favourites");
        const favouritebooks = userData.favourites;

        return res.json({ message: "Success", data: favouritebooks })

    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "An error occured" })
    }
});


module.exports = router;