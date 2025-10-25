const joi=require("joi")
const messageSchema=joi.object({
    senderId:joi.string().trim().min(1).required(),
    content:string().trim().min(1).required(),
    timestamp:joi.date().required()
})
const messageValidation=joi.object({
    receiverId:joi.string().trim().min(1).required(),
    status:joi.string(),
    SocketRoomId:joi.string().trim().min(1).required(),
    messages:joi.array().items(messageSchema).min(1).required()
})
module.exports=messageValidation;