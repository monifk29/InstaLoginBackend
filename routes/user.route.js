const express = require("express");

const UserModel = require("../model/User.model.js");


const userController = express.Router();

//for Signup
userController.post("/reg", async(req, res) => {
  const payload = req.body;
  const { email, password } = payload;

  // bcrypt.hash(password, 8, async function (error, hashed_pass) {
    
      const user = new UserModel({
        email,
        password: password,
       
      });
      await user.save();
      res.send("Login Successful");
    
  // });
});





module.exports = userController;


