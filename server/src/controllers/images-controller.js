const router = require('express').Router();
const imageService=require('../services/imagesService');

router.route('/image/:imageId')

.get((req,res)=>{
    let imageId=req.params.imageId;   
    imageService.getImage(imageId)
    .then(image=>res.json(image))
})

router.route('/images/last10')

.get((req,res)=>{
    imageService.last10()
    .then(images=>res.json(images))
})

router.route('/images/catalog')

.post((req,res,next)=>{

 let newImage={...req.body,owner:req.user.id};
 imageService.createImage(newImage)
 .then(image=>res.json(image))
 .catch(err=>next(err))

})

module.exports = router