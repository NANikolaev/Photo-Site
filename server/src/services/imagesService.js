let Image = require('../models/Image');
let User = require('../models/User');

async function createImage(newImage) {
    let image = await Image.create(newImage);
    let owner = await User.findById(image.owner)
    if(owner.images.length == 10){
        return image
    }
    owner.images.push(image._id)
    await User.findByIdAndUpdate(owner._id,owner)
    return image
}

function getImage(imageId){
    return Image.findById(imageId).lean()
}

function last10(){
   return Image.find().limit(10).sort({$natural:-1})
         
}

module.exports = {
    createImage,
    getImage,
    last10,
}