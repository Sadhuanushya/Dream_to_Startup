const joi=require("joi")
const historySchema=joi.object({
    transactionId:joi.string().trim().required(),
    Amount:joi.number().required(),
    paymentDate:joi.number().required()
})
const SubscriptionValidation=mongoose.Schema({
    EntrepreneurId:joi.string().trim().required(),
    planName:joi.string().trim().required(),
    status:joi.boolean().required(),
    expiredDate:joi.date(),
    history:joi.array().items(historySchema)
})
module.exports=SubscriptionValidation;