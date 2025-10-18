const joi =require("joi")
const officeLocationShema=joi.object({
        address: joi.string().max(200).trim().required(),
        city: joi.string().max(40).trim().required(),
        state: joi.string().max(40).trim().required(),
        country: joi.string().max(40).trim().required(),
        pincode: joi.number().integer().min(100000).max(999999).required()
})
const pastInvestmentSchema=joi.object({
    projectName:joi.string().trim().required(),
    investment:joi.number().required()
})
const ApplicationSchema=joi.object({
        EntrepreneurId:joi.string(),
        AppliedAt:joi.date()
})
const postSchema=joi.object({
    title:joi.string().min(3).max(50).trim().required(),
    prefferedSector:joi.string().trim().min(3).max(50).required(),
    description:joi.string().max(500).trim().required(),
    targetInvestment:joi.number().required(),
    applications:joi.array().items(ApplicationSchema)
})

const InvesterValidation=joi.object({
    
    fullName:joi.string().trim().min(3).max(30).required(),
    email:joi.string().email().required(),
    officeLocation:officeLocationShema.required(),
    linkedinUrl:joi.string().max(70).required(),
    bio:joi.string().max(500).required(),
    pastInvestment:joi.array().items(pastInvestmentSchema).max(10).min(0).required(),
    post:joi.array().items(postSchema).min(0).max(5).required()
})
module.exports=InvesterValidation;