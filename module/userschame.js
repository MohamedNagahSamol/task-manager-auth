const mongo = require('mongoose')



const Schema = mongo.Schema;
const bcrypt = require('bcrypt');



const UserSchean = new Schema({
  username: String,
  email: String,
  password: String,
})

UserSchean.pre("save",async function () {
 this.password= await bcrypt.hash(this.password,10)

})
const AuthUser = mongo.model("User", UserSchean);
 module.exports=AuthUser

