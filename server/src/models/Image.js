const mongoose=require('mongoose');
const User=require('./User');

let imageSchema=new mongoose.Schema({
    title:{
       type:String,
       required:[true,'Image is required'],
    },
    url:{
       type:String,
       required:[true,"Url is required"],
       validate:[/^[http?s]+:\/\//,'Invalid Url adress'] 
    },
    owner:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments:[],
    date:{ type:Date, default: Date.now}
    
})

imageSchema.path('comments').validate(function(value){
  if (value.length == 10) {
      throw new Error("Limit was reached. No more than 10 comments.");
    }
})

imageSchema.pre('findOneAndUpdate', function(next) {
  this.options.runValidators = true;
  next();
})


const Image=mongoose.model('Image',imageSchema)

module.exports=Image
