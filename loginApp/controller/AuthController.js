const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//  get all user
router.get("/user", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

// Register user
router.post("/register", (req, res) => {
  // encript password
  let hasPassWord = bcrypt.hashSync(req.body.password, 8);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hasPassWord,
      phone: req.body.phone,
      role: req.body.role ? req.body.role : "user",
    },
    (err, data) => {
      if (err) return res.status(500).send("Error while Register");
      res.status(200).send("Registration Successful");
    }
  );
});

// login user

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, User) => {
    if (err) return res.send({ auth: false, token: "Error While Login" });
    if (!User)
      return res.send({ auth: false, token: "No User Found Register first" });
    else {
      const passWordInvalid = bcrypt.compareSync(
        req.body.password,
        User.password
      );
      if (!passWordInvalid)
        return res.send({ auth: false, token: "Invalid Password" });
      // in case email and password are both valid
      let token = jwt.sign({ id: User._id }, config.secret, {
        expiresIn: 84600,
      });
      return res.send({ auth: true, token: token });
    }
  });
});

//user Info
router.get("/userinfo",(req,res)=>{
 let token=req.headers['x-access-token'];
 if(!token) return res.send({auth: false, token:"No token Provided"})
 // jwt verify token
 jwt.verify(token,config.secret,(err,user)=>{
  if(err) return res.send({auth: false, token:"invalid token"})
  User.findById(user.id,(err,result)=>{
   res.send(result);
  })
 })
}) 
module.exports = router;
