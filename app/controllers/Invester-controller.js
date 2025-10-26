const InvesterValidation=require('../validations/Invester_Profile-validation')
const Invester=require('../models/Invester_Profile-model')
const InvesterCtrl={}
InvesterCtrl.create=async(req,res)=>{
    const {error,value}=InvesterValidation.validate(req.body)
    if(error){
        return res.status(400).json(error)
    }
    try{
    const Existingemail=await findOne({email:value.email})
        if(Existingemail){
           return  res.status(404).json({error:"An account with this email address already exists"})
        }
    const profile=new Invester(value)
    console.log("value",value,req.body)
    profile.save()
    res.status(201).json(profile)
    }catch(err){
        res.status(500).json(err)
    }
}
InvesterCtrl.list=async(req,res)=>{
    try{
    const Investers= await Invester.find()
    res.status(200).json(Investers)
    }catch(err){
        res.status(500).json(err)
    }
}
InvesterCtrl.show=async(req,res)=>{
    const id=req.params.id
    try{
        const InvesterProfile=await Invester.findById({_id:id})
        if(!InvesterProfile){
            res.status(404).json("record not found")
        }
        res.status(200).json(InvesterProfile)
    }
    catch(err){
        res.status(500).json(err)
    }
}
InvesterCtrl.update=async(req,res)=>{
    const id=req.params.id
    const {error,value}=await InvesterValidation.validate(req.body)
    if(error){
        res.status(400).json(error)
    }
    try{
        const InvesterProfile =await Invester.findOneAndUpdate({_id:id},value,{new:true})
        res.status(200).json(InvesterProfile)
    }catch(err){
        res.status(500).json(err)
    }
}
InvesterCtrl.delete=async(req,res)=>{
    const id=req.params.id
    try{
        const InvesterProfile=await Invester.findOneAndDelete({_id:id})
        if(!InvesterProfile){
            res.status(404).json("record not found")
        }
        res.status(200).json(InvesterProfile)
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports=InvesterCtrl;