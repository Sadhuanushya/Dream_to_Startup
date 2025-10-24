const mongoose=require("mongoose")
const querySchema=mongoose.Schema({
    userQuery:String,
    botResponse:String,
},{timestamps:true})
const ChatbotSchema=mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    queries:{
        type:[querySchema],
        default:[]
    }
},{timestamps:true})
const Chatbot=mongoose.model("Chatbot",ChatbotSchema)
module.exports=Chatbot;