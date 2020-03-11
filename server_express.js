const express = require('express');
const body_par=require('body-parser')


const app=express();


app.use(express.static(__dirname + '/public'))



app.listen(3006);





















/*app.get('/',(req,res)=>{
	//console.log(req.query);
    //req.body
    //console.log(req.header)
    console.log(req.params)
	res.status(404).send('not found');
})
/*app.get('/user',(req,res)=>{
	
	res.send('<h1>getting user<h1>');
})

app.post('/user',(req,res)=>{
	console.log(req.body);
	res.send("succes");
})
*/



























