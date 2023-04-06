let User = require('../models/User');

const jwt = require('jsonwebtoken');
const secret = require('../configurations/secret');
const bcrypt = require('bcrypt');

function register(newUser) {
   
    return User.create(newUser)
        .then(user => {
            let payload = {
                username: user.username,
                id: user._id,
            }
            let accessToken = jwt.sign(payload, secret, { expiresIn: '1d' })
            return {...payload,accessToken:accessToken}
        })

}

function login(userInfo) {
   
    return User.findOne({username:userInfo.username})
          .then(user=>{
             if(!user){throw new Error('Invalid Email/Password')}
             let isValid = bcrypt.compareSync(userInfo.password, user.password)
             if (!isValid) {throw new Error('Invalid Email/Password')}
             let payload = {
                 username: user.username,
                 id: user._id,
             }
             let accessToken = jwt.sign(payload, secret, { expiresIn: '1d' })
             return {...payload,accessToken:accessToken}
          })
 
 }



module.exports = {
    register, 
    login,
}