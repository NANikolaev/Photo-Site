const router = require('express').Router();
const multer=require('multer');
const upload=multer();
const uploadService=require("../services/upload-service");


router.route("/upload/image")

.post(upload.single('image'),async(req,res)=>{
       let imageFile=req.file
       let image= await uploadService.uploadImage(imageFile);
       res.json(image)
})


module.exports = router