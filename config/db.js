const mongoose=require('mongoose');
async function ConfigureDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Dream_to_Startup')
        console.log('server connected to the DB')

    }catch(err){
        console.log("server error to connecting DB",err.message);
    }

}
module.exports=ConfigureDB;