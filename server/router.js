const express=require('express');
const router =express.Router();

router.get('/',(req,res)=>{
    res.send('Server is Up and Working Fine');
})

module.exports=router;