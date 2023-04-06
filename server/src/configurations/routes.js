const imagesController=require('../controllers/images-controller');
const usersController=require('../controllers/users-controller');
const uploadController=require('../controllers/upload-controller');

module.exports=(server)=>{  
    server.use(uploadController)
    server.use(usersController)    
    server.use(imagesController)  
}