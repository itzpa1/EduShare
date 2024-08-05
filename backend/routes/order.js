const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const Book = require("../models/book");
const Order = require("../models/order");
const User = require("../models/user");

// place order
router.post("/place-order", authenticateToken, async (req,res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;
        for (const orderData of order){
            const newOrder = new Order({user: id, book: orderData._id});
            const orderDataFromDb = await newOrder.save();
            // saving order in user model
            await User.findByIdAndUpdate(id, { $push: {orders: orderDataFromDb._id},});

            // clearing cart 
            await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id},})
        }
        return res.json({status: "Success", message: "Order PLaced Successfully"
        });
    } catch (error) {
        console.log(error);
        return res.json({status: "Success", message: "An error ocurred"});
    }
})


// get order history of particular user
router.post("/get-order-history", authenticateToken, async (req,res) => {
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate({path: "orders", populate: {path: "book"},})
        
        const orderData = userData.orders.reverse();
        return res.json({status: "Success", data: orderData,
        });
    } catch (error) {
        console.log(error);
        return res.json({status: "Success", message: "An error ocurred"});
    }
})


// get all orders -admin
router.post("/get-all-orders", authenticateToken, async (req,res) => {
    try {
        const userData = await Order.find().populate({path: "book",}).populate({path: "user"},).sort({createdAt: -1});

        return res.json({status: "Success", data: userData,});
    } catch (error) {
        console.log(error);
        return res.json({status: "Success", message: "An error ocurred"});
    }
})


// update order -admin
router.post("/update-status/:id", authenticateToken, async (req,res) => {
    try {
        const {id} = req.headers;
        await Order.findByIdAndUpdate(id, { status: req.body.status})

        return res.json({status: "Success", message: "Status updated Successfully",});
    } catch (error) {
        console.log(error);
        return res.json({status: "Success", message: "An error ocurred"});
    }
})

module.exports = router;