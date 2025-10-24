const mongoose=require('mongoose')
const notificationSchema=new mongoose.Schema({
    recipientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User", 
    },
    content:String,
    pushed:String,
    isRead:Boolean,
    
},{timestamps:true})
const Notification=mongoose.model("Notification",notificationSchema)
module.exports=Notification;