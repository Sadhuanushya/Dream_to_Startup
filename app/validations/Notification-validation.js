const joi=require("joi")
const notificationValidation=joi.object({
        recipientId:joi.string().trim().required(),
        content:joi.string().min(1).required(),
        pushed:joi.string(),
        isRead:joi.boolean(),
})
module.exports=notificationValidation;