const Entrepreneur=require("./Entrepreneur_Profile-model")
const mongoose =require('mongoose')
const ApplicationSchema=new mongoose.Schema({
    EntrepreneurId:mongoose.Schema.Types.ObjectId,
    AppliedAt:Date
})
const PastInvestmentSchema=new mongoose.Schema({
    projectName:String,
    investment:Number
})
const LocationSchema=new mongoose.Schema({
    address:String,
    city:String,
    state:String,
    country:String,
    pincode:String

})
const PostSchema=new mongoose.Schema({
    title:String,
    PrefferedSector:String,
    description:String,
    targetInvestment:Number,
    applications:{
        type:[ApplicationSchema],
    }
},{timestamps:true})
const InvesterSchema=new mongoose.Schema({
    fullName:String,
    email:String,
    officeLocation:{
        type:LocationSchema,
        default:{}
    },
    linkedinUrl:String,
    bio:String,
    pastInvestment:{
        type:[PastInvestmentSchema]
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    post:{
        type:[PostSchema],
        default:[]
    }
},{timestamps:true})
const Invester=mongoose.model('InvesterProfile',InvesterSchema)
module.exports=Invester