const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
// const jwt=require("jsonwebtoken");
const port = process.env.PORT || 8000;
require("./db/conn");
const User = require("./models/users");
const Post = require("./models/post");
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/create-post", (req, res) => {
  res.render("create-post")
})
app.post("/post",async(req,res)=>{
  try{
      // res.send(req.body)
      const postData=new Post(req.body);
      await postData.save();
      res.status(201).render("index");
  }catch(e){
      res.status(500).send(e);
  }
})

app.get("/contact-info", (req, res) => {
  res.render("contact-info")
})
app.post("/contact",async(req,res)=>{
  try{
      // res.send(req.body)
      const userData=new User(req.body);
      await userData.save();
      res.status(201).render("index");
  }catch(e){
      res.status(500).send(e);
  }
})

app.get("/about-me", (req, res) => {
  res.render("about-me")
})

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
})
