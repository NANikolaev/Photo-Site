const router = require('express').Router();
const usersService = require("../services/usersService")

router.post('/users/register', (req, res, next) => {
  let newUser = req.body
  usersService.register(newUser)
    .then(user => { res.json(user) })
    .catch(err => next(err))
})


router.post('/users/login', (req, res, next) => {
  let userInfo = req.body

  usersService.login(userInfo)
    .then(user => { res.json(user) })
    .catch(err => next(err))

})

module.exports = router