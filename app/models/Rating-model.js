const mongoose=require("mongoose")
const RatingSchema=mongoose.Schema({
    vedioId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Projectvideo"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:Number,
    unique: ['videoId', 'userId'] 
})
const rating=mongoose.model("Rating",RatingSchema)
module.exports=rating;