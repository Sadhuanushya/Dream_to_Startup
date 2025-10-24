const joi=require(joi)
const ratingValidation=joi.object({
    vedioId:joi.string(),
    userId:joi.string(),
    rating:joi.number(),
})
module.exports=ratingValidation;