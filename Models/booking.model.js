const mongoose=require('mongoose');

const bookingSchema=mongoose.Schema({

        
        user : { type: ObjectId, ref: 'User' },
        flight : { type: ObjectId, ref: 'Flight' }

   
})

const BookingModel=mongoose.model("Booking",bookingSchema)

module.exports={BookingModel}