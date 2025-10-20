const bcryptjs=require('bcryptjs');
const Users=require('../models/Users-model')
const jwt=require('jsonwebtoken')
const {RegisterValidation,LoginValidation}=require('../validations/Users-validation')
const ctrl={};
ctrl.register=async(req,res)=>{
    const body=req.body;
    const {error,value}=RegisterValidation.validate(body,{abortEarly:false})
    if(error){
        return res.json({error:error})
    }
    try{
    const existingEmail=await Users.findOne({email:body.email})
    if(existingEmail){
        return res.status(400).json({error:'existing email'})
    }
    const register=new Users(value);
    const salt=await bcryptjs.genSalt();
    const hash=await bcryptjs.hash(register.password,salt)
    register.password=hash;
    const count= await Users.countDocuments();
    if(count==0){
        register.role="Admin"
    }
    await register.save()
    res.status(200).json(register)

    }catch(err){
        console.log(err)
    }
}
ctrl.login=async(req,res)=>{
    const body=req.body;
    const{error,value}=LoginValidation.validate(req.body,{abortEarly:false})
    if(error){
        return res.status(400).json(error)
    }
    try{
        const valid= await Users.findOne({email:value.email})
        if(!valid){
            return res.status(401).json('email invalid')
        }
        const passwordMatch=await bcryptjs.compare(value.password,valid.password)
        if(!passwordMatch){
            return res.status(401).json('invalid password')
        }
        const tokenData={userId:valid._id,role:valid.role}
        console.log(tokenData);
        // console.log('secretKey',process.env.SECRET_KEY)
        const token=jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'7d'})
        res.status(200).json({token:token})

    }catch(err){
        console.log(err)
    }
}

module.exports=ctrl;