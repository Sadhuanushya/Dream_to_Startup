const mongoose =require('mongoose');
const addressSchema=new mongoose.Schema({
    address:String,
    city:String,
    state:String,
    country:String,
    pincode:Number
},{ _id: false })
const EducationSchema=mongoose.Schema({
    institutionName:String,
    course:String,
    year:Number
},{ _id: false })
const WorkExperienceItemSchema = new mongoose.Schema({
    company: String,
    position: String,
    years: Number,
},{ _id: false });
const PastProjectSchema=new mongoose.Schema({
    projectname:String,
    websiteUrl:String,
    revenue:Number
},{ _id: false })


const EntrepreneurSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    fullname:String,
    email:String,
    phone:String,
    address:{
        type:addressSchema,
        default:{}
    },
    bio:String,
    linkdinUrl:String,
    skills:{
        type:[String],
        default:[]
    },
    education:{
        type:[EducationSchema],
        default:[]
    },
    workExperience: {
        type: [WorkExperienceItemSchema],
        default: []
    },
    pastProject:{
        type:[PastProjectSchema],
        default:[]
    },
    identityDocument:String,
    BusinessRegistrationDocument:String,
    projectVideo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProjectVideo"
    },
     //verification Status
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
const Entrepreneur=mongoose.model("Entrepreneur",EntrepreneurSchema)
module.exports= Entrepreneur;
 