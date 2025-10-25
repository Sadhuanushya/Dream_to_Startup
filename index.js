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
const AuthenticateUser=require("./app/middlewares/AuthenticateUser")
const AuthorizeUser=require("./app/middlewares/Authorizeuser")
ConfigureDB()

app.post('/register',ctrl.register)
app.post('/login',ctrl.login);

app.post('/EntrepreneurProfile',AuthenticateUser,AuthorizeUser(["entrepreneur"]),EntrepreneurCtrl.create)
app.get('/Entrepreneurs',AuthenticateUser,AuthorizeUser(["admin","invester"]),EntrepreneurCtrl.list)
app.get('/EntrepreneurProfile/:id',AuthenticateUser,AuthorizeUser(["entrepreneur","admin","invester"]),EntrepreneurCtrl.show)
app.put('/Entrepreneur/:id',AuthenticateUser,AuthorizeUser(["admin","entrepreneur"]),EntrepreneurCtrl.update)
app.delete('/Entreprenuer/:id',AuthenticateUser,AuthorizeUser(["admin","entrepreneur"]),EntrepreneurCtrl.delete)

app.post('/InvesterProfile',AuthenticateUser,AuthorizeUser(["invester"]),InvesterCtrl.create)
app.get('/Investers',AuthenticateUser,AuthorizeUser(["admin","entreprenuer"]),InvesterCtrl.list)
app.get('/InvesterProfile/:id',AuthenticateUser,AuthorizeUser(["entrepreneur","admin","invester"]),InvesterCtrl.show)
app.put('/Invester/:id',AuthenticateUser,AuthorizeUser(["invester","admin"]),InvesterCtrl.update)
app.delete('/Invester/:id',AuthenticateUser,AuthorizeUser(["admin","invester"]),InvesterCtrl.delete)

app.listen(port,()=>{
    console.log('server running on the port',port)
})

