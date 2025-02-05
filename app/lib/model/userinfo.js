import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
})
const Userinfo= mongoose.models.Userinfo||mongoose.model('Userinfo',userSchema);
export default Userinfo