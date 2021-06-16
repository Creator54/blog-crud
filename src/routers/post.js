const express=require("express");
const router=new express.Router();
const Post=require("../models/post");


router.post("/create-post",async(req,res)=>{
    try{
        const addingPostRecords=new Post(req.body)
        // console.log(req.body); 
        if(addingPostRecords.postname =="" || addingPostRecords.category =="" || addingPostRecords.content =="" || addingPostRecords.conclusion ==""){
            res.status(400).end(alert("Please fill all Fields Correctly!"));
        }else{
        const insertPost=await addingPostRecords.save();
        res.status(201).render('delete-success');
        }
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
        res.render('create-post',{d:getPost,action:"/"+_id});
        // res.send(getPost);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post("/create-post/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getPost=await Post.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).render("delete-success");
        // res.send(getPost);
    }catch(e){
        res.status(500).send(e);
    }
})

router.get("/delete/:id",async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.status(201).render("delete-success");
        // res.send(getPost);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;
