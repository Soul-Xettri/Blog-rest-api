const express = require('express')
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer");


dotenv.config() 
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected"))
.catch((err)=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/upload", upload.single("file"),(req,res)=>{
    res.status(200).json("Your File Has Been Uploaded!!");
})

app.use("/auth", authRoute); 
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/categories",categoryRoute);

app.listen("5000", ()=>{    
    console.log("Backend is running mate!");
})