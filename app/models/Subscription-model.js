const mongoose=require("mongoose")
const historySchema=mongoose.Schema({
    transactionId:String,
    Amount:Number,
    paymentDate:Date
})
const SubscriptionSchema=mongoose.Schema({
    EntrepreneurId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"'Entrepreneur"
    },
    planName:String,
    status:{
        type:Boolean,
        default:false
    },
    expiredDate:Date,
    history:{
        type:[historySchema],
        default:[]
    }
},{timestamps:true})
const Subscription=mongoose.model("Subscription",SubscriptionSchema)
module.exports=Subscription;