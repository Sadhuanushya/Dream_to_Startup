const joi=require("joi")
const historySchema=joi.object({
    transactionId:joi.string(),
    Amount:joi.number(),
    paymentDate:joi.number()
})
const SubscriptionValidation=mongoose.Schema({
    EntrepreneurId:joi.string(),
    planName:joi.string(),
    status:joi.boolean(),
    expiredDate:joi.date(),
    history:joi.array().items(historySchema)
})
module.exports=SubscriptionValidation;