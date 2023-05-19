const express = require('express');
const router = express.Router();

const User = require('../model/users');

//index route

router.get('/', async (req, res) => {
  res.render('pages/index')
});

//login route

router.post('/login', async (req, res) => {
  let {email, password} = req.body.user;

  let user = new User({email, password});

  try {
    await user.save();
    res.send('User created successfully');
  } catch (error) {
    res.status(422)
  }
});
    






module.exports = router;





