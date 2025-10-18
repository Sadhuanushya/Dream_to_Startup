console.log("Dream to Startup")


const express=require('express');
const app=express();
app.use(express.json());
//read the contents of the .env file and it to process.env
require('dotenv').config();
const port=process.env.PORT;
const ConfigureDB=require('./config/db')
const ctrl=require('./app/controllers/Users-controller')
ConfigureDB()

app.post('/register',ctrl.register)
app.post('/login',ctrl.login);
app.post('/Eprofile',ctrl.eprofile)
app.post('/Iprofile',ctrl.iprofile)

app.listen(port,()=>{
    console.log('server running on the port',port)
})
