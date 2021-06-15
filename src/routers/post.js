const express=require("express");
const router=new express.Router();
const Post=require("../models/post");


router.post("/create-post",async(req,res)=>{
    try{
        const addingPostRecords=new Post(req.body)
        // console.log(req.body);
        const insertPost=await addingPostRecords.save();
        res.status(201).render('index');
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/post",async(req,res)=>{
    try{
        const getPost=await Post.find({});
        // console.log(getPost[0])
        res.render('gallery',{entries:getPost});
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("/post/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getPost=await Post.findById(_id);
        res.send(getPost);
    }catch(e){
        res.status(400).send(e);
    }
})

router.patch("/post/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getPost=await Post.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(getPost);
    }catch(e){
        res.status(500).send(e);
    }
})

router.delete("/post/:id",async(req,res)=>{
    try{
        const getPost=await Post.findByIdAndDelete(req.params.id);
        res.send(getPost);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;