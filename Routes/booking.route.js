const express=require('express')

// const {BookingModel}=require("../Models/booking.model")
const {UserModel}=require("../Models/user.model")
const {FlightModel}=require("../Models/flight.model")

const bookingRouter=express.Router()


bookingRouter.get("/",async(req,res)=>{
    const booking=await FlightModel.find()
    console.log("booking")
    res.send(booking)
})

module.exports={bookingRouter}