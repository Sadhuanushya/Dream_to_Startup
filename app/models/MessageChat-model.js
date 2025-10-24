const mongoose=require("mongoose")
const chatSchema=mongoose.Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:String,
},{timestamps:true})
const messageSchema=mongoose.Schema({
    receiverId:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    status:String,
    SocketRoomId:String,
    messages:[chatSchema]
},{timestamps:true})
const message=mongoose.model("Message",messageSchema)
module.exports=message