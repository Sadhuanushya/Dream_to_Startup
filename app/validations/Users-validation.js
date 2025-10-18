const joi=require('joi');
const RegisterValidation=joi.object({
    username:joi.string().min(3).max(50).trim().required(),
    email:joi.string().email().trim().required(),
    password:joi.string().min(8).max(128)
})
const LoginValidation=joi.object({
    email:joi.string().email().trim().required(),
    password:joi.string().required()
})
module.exports={
RegisterValidation,
LoginValidation
};