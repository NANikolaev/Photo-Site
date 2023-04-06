const mongoose=require('mongoose');
const Image=require('./Image');
const bcrypt=require('bcrypt');

let userSchema=new mongoose.Schema({
    username:{
       type:String,
       unique:[true],
       required:[true,'Username is required'],
       minLength:[5,'Username should be at least 5 characters long']
    },
    password:{
       type:String,
       required:[true,"Password is required"],
       minlength:[8,'Password should be at least 8 characters long'],
    },
    images:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    date:{ type:Date, default: Date.now}
    
})

userSchema.path('images').validate(function(value){
    if (value.length == 10) {
        throw new Error("Limit was reached. No more than 10 uploaded photos.");
      }
})

userSchema.pre('save',function (next){
    bcrypt.hash(this.password,8)
    .then(pass=>{
      this.password=pass
      next()
    })
    
})

const User=mongoose.model('User',userSchema)
module.exports=User