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
const SectorSchema=joi.object({
    sector:joi.string().trim().min(3).max(30).required(),
    description:joi.string().trim().min(10).max(100).required(),
    targetInvestment:joi.number().min(1000).required()
})
const InvesterValidation=joi.object({
    
    fullName:joi.string().trim().min(3).max(30).required(),
    email:joi.string().email().required(),
    bio:joi.string().min(10).max(500).required(),
    linkedinUrl:joi.string().max(70).required(),
    officeLocation:officeLocationShema.required(),
    preferredSector:joi.array().items(SectorSchema),
    pastInvestment:joi.array().items(pastInvestmentSchema).max(10).min(0).required(),
    verificationDocument:joi.string().uri().min(10).max(40).required()
    
})
module.exports=InvesterValidation;