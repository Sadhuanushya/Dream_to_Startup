const joi=require("joi")
const InvestersSchema=joi.object({
    investerid:joi.string().trim().required()
})
const projectVideovalidation=joi.object({
    EntrepreneurId:joi.string().trim().required(),
    Title:joi.string().trim().min(3).max(50).required(),
    requireCapital:joi.number().required(),
    summary:joi.string().trim().min(3).max(200).required(),
    videoUrl:joi.string().required(),
    investorInterests:joi.array().items(InvestersSchema).optional(),
    viewCount:joi.number(),
})
module.exports=projectVideovalidation;