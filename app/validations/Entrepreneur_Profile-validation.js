
const joi = require('joi');
const addressSchema = joi.object({
    address: joi.string().max(200).trim().required(),
    city: joi.string().max(40).trim().required(),
    state: joi.string().max(40).trim().required(),
    country: joi.string().max(40).trim().required(),
    pincode: joi.number().integer().min(100000).max(999999).required()
});


const workExperienceItemSchema = joi.object({
    company: joi.string().trim().max(60).trim().required(),
    position: joi.string().trim().max(60).trim().required(),
    years: joi.number().integer().min(0).max(50).required(),
});

const pastProjectSchema = joi.object({
    projectname: joi.string().min(3).max(50).trim().required(),
    websiteUrl: joi.string().uri().max(50).required(),
    revenue:joi.number().min(0).required()
});

const educationSchema=joi.object({
    institutionName:joi.string().min(5).max(50).trim().required(),
    course:joi.string().min(3).max(40).required(),
    year:joi.number()

})

const EnterPreneurValidation = joi.object({
    fullname: joi.string().trim().min(3).max(40).required(),
    email: joi.string().email().trim().required(),
    phone: joi.string().length(10).pattern(/^[0-9]+$/).required(), 
    address: addressSchema.required(),
    bio: joi.string().min(10).max(500).required(),
    linkdinUrl: joi.string().uri().max(200).optional(),
    skills: joi.array().items(joi.string().trim().max(50).min(3)).min(1).required(),
    education: joi.array().items(educationSchema).max(5).required(), 
    workExperience: joi.array().items(workExperienceItemSchema).min(0).max(6).required(), 
    pastProject: joi.array().items(pastProjectSchema).min(0).max(10).required(),
    identityDocument:joi.string().uri().max(100).required(),
    businessRegistrationDocument:joi.string().uri().max(100).required()
});

module.exports = EnterPreneurValidation;
