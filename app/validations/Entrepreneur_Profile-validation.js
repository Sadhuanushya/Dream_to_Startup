
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

const projectStageIdeaSchema = joi.object({
    projectStage: joi.string().valid('Idea').required(),
    projectname: joi.string().min(3).max(30).trim().required(),
    aboutProject: joi.string().max(1000).trim().required(),
    targetmarket: joi.string().max(30).trim().required(),
    websiteUrl: joi.forbidden(),
    revenue: joi.forbidden()
}).required();

const projectStageLaunchedSchema = joi.object({
    projectStage: joi.string().valid('Launched').required(),
    projectname: joi.string().min(3).trim().max(30).required(),
    websiteUrl: joi.string().uri().max(300).required(),
    revenue: joi.number().min(0).required(),
    aboutProject: joi.forbidden(),
    targetmarket: joi.forbidden()
}).required();

const projectStageSchema = joi.alternatives().try(
    projectStageIdeaSchema,
    projectStageLaunchedSchema
);

const pastProjectSchema = joi.object({
    projectname: joi.string().min(3).max(50).trim().required(),
    websiteUrl: joi.string().uri().max(50).required(),
    revenue:joi.number().min(0).required()
});
const uploadedVideoSchema = joi.object({
    title: joi.string().min(3).max(50).trim().required(),
    summary: joi.string().min(5).max(500).trim().required(),
    videoUrl: joi.string().uri().min(3).max(100).required(),
    requiredCapital: joi.number().min(0).required(),
    rating: joi.number().min(0).max(5).optional(),
    viewCount: joi.number().integer().min(0).optional(),
});

const EnterPreneurValidation = joi.object({
    fullname: joi.string().trim().min(3).max(40).required(),
    email: joi.string().email().trim().required(),
    phone: joi.string().length(10).pattern(/^[0-9]+$/).required(), 
    address: addressSchema.required(),
    bio: joi.string().min(10).max(500).required(),
    linkdinUrl: joi.string().uri().max(200).optional(),
    projectStage: projectStageSchema.required(),
    education: joi.string().max(200).required(),
    skills: joi.array().items(joi.string().trim().max(50).min(3)).min(1).required(), 
    workExperience: joi.array().items(workExperienceItemSchema).min(0).max(6).required(), 
    pastProject: joi.array().items(pastProjectSchema).min(0).max(10).required(),
    uploadedVideo: joi.array().items(uploadedVideoSchema).min(0).max(5).required()
});

module.exports = EnterPreneurValidation;
