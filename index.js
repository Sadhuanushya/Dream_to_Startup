console.log("Dream to Startup")


const express=require('express');
const app=express();
app.use(express.json());
//read the contents of the .env file and it to process.env
require('dotenv').config();
const port=process.env.PORT;
const ConfigureDB=require('./config/db')
const ctrl=require('./app/controllers/Users-controller')
const EntrepreneurCtrl=require("./app/controllers/Entrepreneur-Controller")
const InvesterCtrl=require("./app/controllers/Invester-controller")
ConfigureDB()

app.post('/register',ctrl.register)
app.post('/login',ctrl.login);
app.post('/profile',EntrepreneurCtrl.create)
app.post('/profile',InvesterCtrl.create)
app.get('/Entrepreneurs',EntrepreneurCtrl.list)
app.get('/EntrepreneurProfile/:id',EntrepreneurCtrl.show)
app.put('/Entrepreneur/:id',EntrepreneurCtrl.update)
app.delete('/Entreprenuer/:id',EntrepreneurCtrl.delete)

app.listen(port,()=>{
    console.log('server running on the port',port)
})

