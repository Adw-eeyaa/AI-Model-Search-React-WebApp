const { exec } = require('child_process');
const { error } = require('console');
const express = require('express');
const app = express();
app.use(express.json());
app.get('/scan',(req,res,err)=>{
    let url = req.body;
    if(!url){
        res.send(`url not found status code 400 ${err}`)
        
    }

exec('.\code.cmd',(err,stdout,stderr)=>{
    if(stderr){
        return res.send(`internal error occurred ${stderr}`);
    }
    else if(error){
        return res.send(`server error code 500 ${error}`);
    }
    console.log(`${stdout}`);
    return res.send(`<pre>${stdout}</pre>`);
    })
})
const port = 6969;
app.listen(port,()=>{
    console.log(`Server up on ${port}`);
})