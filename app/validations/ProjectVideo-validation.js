const joi=require("joi")
const projectVideovalidation=joi.object({
    EntrepreneurId:joi.string(),
    Title:joi.string(),
    requireCapital:joi.number(),
    summary:joi.string(),
    videoUrl:joi.string(),
    investorInterests:joi.array(),
    viewCount:joi.number(),
})
module.exports=projectVideovalidation;