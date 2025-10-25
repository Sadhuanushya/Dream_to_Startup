const joi=require(joi)
const ratingValidation=joi.object({
    vedioId:joi.string().trim().required(),
    userId:joi.string().trim().required(),
    rating:joi.number().trim().required(),
})
module.exports=ratingValidation;