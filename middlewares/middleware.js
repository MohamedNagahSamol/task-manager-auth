var jwt = require("jsonwebtoken");
const authUser = require("../module/userschame");

const requireAuth =async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
  return res.status(401).json({message:'no token'})
  }
  try{
   const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
 
   const user = await authUser.findById(decoded.id)
  if(!user){
    return res.status(401).json({message:"user not found"})
  }
  req.user=user
 
  next();
  }catch(err){
   return res.status(401).json({massge:'invalid token'})
  }
};

const checkIfUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
   
    jwt.verify(token, async (err, decoded) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        const loginUser = await AuthUser.findById(decoded.id);

        res.locals.user = loginUser;
        next();
      }
    });
  } else {
    // no login user
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkIfUser };