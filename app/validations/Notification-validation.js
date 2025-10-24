const joi=require("joi")
const notificationValidation=joi.object({
        recipientId:joi.string(),
        content:joi.string(),
        pushed:joi.string(),
        isRead:joi.boolean(),
})
module.exports=notificationValidation;