const InvesterValidation=require('../validations/Invester_Profile-validation')
const Invester=require('../models/Invester_Profile-model')
const InvesterCtrl={}
InvesterCtrl.create=async(req,res)=>{
    const {error,value}=InvesterValidation.validate(req.body)
    if(error){
        return res.json(error)
    }
    const profile=new Invester(value)
    console.log("value",value,req.body)
    profile.save()
    res.json(profile)
}
InvesterCtrl.list=async(req,res)=>{
    try{
    const Investers= await Invester.find()
    res.json(Investers)
    }catch(err){

        res.json(err)
    }
}
InvesterCtrl.show=async(req,res)=>{
    const id=req.params.id
    try{
        const InvesterProfile=await Invester.findById({_id:id})
        if(!InvesterProfile){
            res.json("record not found")
        }
        res.json(InvesterProfile)
    }
    catch(err){
        res.json(err)
    }
}
InvesterCtrl.update=async(req,res)=>{
    const id=req.params.id
    try{
        const InvesterProfile =await Invester.findOneAndUpdate({_id:id},req.body,{new:true})
        res.json(InvesterProfile)
    }catch(err){
        res.json(err)
    }
}
InvesterCtrl.delete=async(req,res)=>{
    const id=req.params.id
    try{
        const InvesterProfile=await Invester.findOneAndDelete({_id:id})
        res.json(InvesterProfile)

    }catch(err){
        res.json(err)
    }


}


module.exports=InvesterCtrl;