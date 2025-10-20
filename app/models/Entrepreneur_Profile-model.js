const mongoose =require('mongoose');
const uploadedVideoSchema=new mongoose.Schema({
    title:String,
    summary:String,
    videoUrl:String,
    requiredCapital:Number,
    rating:Number,
    viewCount:Number,
},{timestamps:true})
const PastProjectSchema=new mongoose.Schema({
    projectname:String,
    websiteUrl:String,
    revenue:Number
})
const WorkExperienceItemSchema = new mongoose.Schema({
    company: String,
    position: String,
    years: Number,
});
const addressSchema=new mongoose.Schema({
    address:String,
    city:String,
    state:String,
    country:String,
    pincode:Number
})

const EntrepreneurSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    phone:String,
    address:{
        type:addressSchema,
        default:{}
    },
    bio:String,
    linkdinUrl:String,
    projectStage: {
        type: new mongoose.Schema({
            projectStage: {
                type: String,
                enum: ['Idea', 'Launched'],
                required: true
            },
            projectname: String,
            aboutProject: String, 
            targetmarket: String, 
            websiteUrl: String,   
            revenue: Number       
        })
    
    },
    education:{
        type:String
    },
    skills:{
        type:[String],
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
    uploadedVideo:{
        type:[uploadedVideoSchema],
        default:[]
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
const Entrepreneur=mongoose.model("EntrepreneurProfile",EntrepreneurSchema)
module.exports= Entrepreneur;
 