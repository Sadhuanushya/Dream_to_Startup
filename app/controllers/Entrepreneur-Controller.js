const EnterPreneurValidation=require('../validations/Entrepreneur_Profile-validation')
const Entrepreneur=require('../models/Entrepreneur_Profile-model')
const EntrepreneurCtrl={}
EntrepreneurCtrl.create=async(req,res)=>{
    const {error,value}=EnterPreneurValidation.validate(req.body)
    if(error){
        return res.json(error)
    }
    const profiledata=new Entrepreneur(value)
    console.log("value",value,req.body)
    profiledata.save()
    res.json(profiledata)
}
EntrepreneurCtrl.list=async(req,res)=>{
    try{
    const Entrepreneurs= await Entrepreneur.find()
    res.json(Entrepreneurs)
    }catch(err){

        res.json(err)
    }
}
EntrepreneurCtrl.show=async(req,res)=>{
    const id=req.params.id
    try{
        const EntrepreneurProfile=await Entrepreneur.findById({_id:id})
        if(!EntrepreneurProfile){
            res.json("record not found")
        }
        res.json(EntrepreneurProfile)
    }
    catch(err){
        res.json(err)
    }
}
EntrepreneurCtrl.update=async(req,res)=>{
    const id=req.params.id
    try{
        const EntrepreneurProfile =await Entrepreneur.findOneAndUpdate({_id:id},req.body,{new:true})
        res.json(EntrepreneurProfile)
    }catch(err){
        res.json(err)
    }
}
EntrepreneurCtrl.delete=async(req,res)=>{
    const id=req.params.id
    try{
        const EntrepreneurProfile=await Entrepreneur.findOneAndDelete({_id:id})
        res.json(EntrepreneurProfile)

    }catch(err){
        res.json(err)
    }


}
module.exports=EntrepreneurCtrl;