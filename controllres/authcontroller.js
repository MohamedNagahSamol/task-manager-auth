const AuthUser = require("../module/userschame");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const { check, validationResult } = require("express-validator");

const post_signup = async (req, res) => {
  try {
    // check validation (email & password)
    const objError = validationResult(req);
    if (objError.errors.length > 0) {
      return res.json({ arrValidationError: objError.errors });
    }

    // check if the email already exist
    const isCurrentEmail = await AuthUser.findOne({ email: req.body.email });
    if (isCurrentEmail) {
      return res.json({ existEmail: "Email already exist" });
    }

    // create new user and login
    const newUser = await AuthUser.create(req.body);
 
   const token =jwt.sign({id:newUser._id},process.env.JWT_SECRET_KEY)
    // var token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
     res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
     res.json({ id: newUser._id });
    } catch (error) {
    console.log(error)
    }
}



const post_login = async (req,res) => {
    try{
    const loginUser = await AuthUser.findOne({email:req.body.email})
    if(loginUser==null){
        res.send("Email not found")
    }else{
        const match = await bcrypt.compare(req.body.password,loginUser.password)
        if(match){
        var token = jwt.sign({ id: loginUser._id }, process.env.JWT_SECRET_KEY);
        res.cookie("jwt", token, { httpOnly: true, maxAge: 86400000 });
        res.json({ id: loginUser._id });
        }else{
            res.send('incorrect password')
        }
    }
    }catch(err){
        console.log(err)
    }
}


module.exports={
    post_login,
    post_signup
}