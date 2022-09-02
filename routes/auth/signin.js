const express = require('express');
const router = express.Router();
const { User } = require('../../models');

/* POST login account. */

router.post('/', async (req, res) => {
  const validationText = /^[a-zA-Z ]+$/;
  const { username, password } =  req.body;
  if(username.match(validationText)){
    const account = await User.findOne({
      where: {
        username: username,
        password: password
      }
    });
    if(account == null){
      return res.status(404).json({
        message: 'login failed'
      })
    }
    res.status(200).json({
      message: 'login success'
    })
  } else {
    res.status(403).json({
      message: 'username harus berupa karakter'
    })
  };
});


module.exports = router;
