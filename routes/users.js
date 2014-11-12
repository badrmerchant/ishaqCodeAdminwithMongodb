var express = require('express');
var router = express.Router();
var adminData={name:"admin",password:"admin"};
var stdData=[
    {user:'a',password:'1',name:'Ishaq',lName:'Bhojani',class:1,tasks:[{status:"Completed",ratings:5,data:"One Page Writing",comments:[{data:'English?',commentor:'Ishaq'}]}]},
    {user:'b',password:'2',name:'Jahanzaib',lName:'Jazzy',class:2,tasks:[]},
    {user:'c',password:'3',name:'Ahmer',lName:'Yasin',class:3,tasks:[]},
    {user:'d',password:'4',name:'Zunair',lName:'Zakir',class:4,tasks:[]},
    {user:'e',password:'5',name:'Basit',lName:'Basit',class:5,tasks:[]}];
var totalClasses ={classOne:1,classTwo:1,classThree:1,classFour:1,classFive:1};
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.post('/loginAdm',function(req, res){
   if(req.body.name==adminData.name && req.body.password==adminData.password){
   res.send({
     user:adminData,
       stdData:stdData,
     message:"You are successfully login"
   })
 }

},function(err){
  res.send(err);
});
router.post('/loginStd',function(req, res){
    for(var i=0;i<stdData.length;i++ )
    if(req.body.name==stdData[i].user && req.body.password==stdData[i].password){
        res.send({
            allData:stdData,
            user:i,
            message:"You are successfully login"
        })
    }

},function(err){
    res.send(err);
});
router.post('/addStd',function(req, res){
    for(var i=0;i<stdData.length;i++ ){
        if(req.body.userName==stdData[i].user){
                    res.send("User Name Already Exist");
        }
        else{
           var userNotExist=true;
        }

    }
    if(userNotExist){
        stdData.push({user:req.body.userName,password:req.body.password,name:req.body.fName,lName:req.body.lName,class:req.body.subClass,tasks:[]})
        res.send({message:"Successfully Added",data: stdData});
    }

},function(err){
    res.send(err);
});
router.post('/switchClass',function(req,res){
    stdData=req.body;
    res.send(req.body)
},function(err){
    res.send(err);
});
router.post('/taskComFromAdmin',function(req,res){
    stdData[req.body.std].tasks[req.body.taskNo].comments.push({data:req.body.comment,commentor:'Admin'});
    res.send(stdData);
},function(err){
    res.send(err);
});
router.post('/giveTask',function(req,res){
    stdData[req.body.std].tasks.push({status:"InComplete",ratings:0,data:req.body.task,comments:[]});
    res.send(stdData);
},function(err){
    res.send(err);
});
router.post('/getRatings',function(req,res){
    stdData=req.body;
    res.send(stdData);
},function(err){
    res.send(err);
});
router.post('/taskComFromStd',function(req,res){
    stdData[req.body.std].tasks[req.body.taskNo].comments.push({data:req.body.comment,commentor:stdData[req.body.std].name});
    res.send(stdData);
},function(err){
    res.send(err);
});
router.post('/changeStatus',function(req,res){
    stdData=req.body;
    res.send(stdData);
},function(err){
    res.send(err);
});
module.exports = router;
