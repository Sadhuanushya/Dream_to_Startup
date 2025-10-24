const joi=require("joi")
const messageSchema=joi.object({
    senderId:joi.string(),
    content:string()
})
const messageValidation=joi.object({
    receiverId:joi.string(),
    status:joi.string(),
    SocketRoomId:joi.string(),
    messages:joi.array().items(messageSchema)
})
module.exports=messageValidation;