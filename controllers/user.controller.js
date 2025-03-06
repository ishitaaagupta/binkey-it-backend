import sendEmail from '../config/sendEmail.js'
import UserModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import verifyEmailTemplate from '../utils/verifyEmailTemplate.js'


export async function registerUserController(req,res){
    try {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                message : "All fields are required",
                error : true,
                success : false
            })
        }
const user =await UserModel.findOne({email})
if(user){
    return res.json({
        message : "User already exists",
        error : true,
        success : false
    })
}

const salt =await bcryptjs.genSalt(10)
const hashPassword = await bcryptjs.hash(password,salt) 

const payload = {
    name,
    email,
    password : hashPassword
}

const newUser = new UserModel(payload)
const save = await newUser.save()
const verifyEmail =await sendEmail({
sendTo:email,
subject :"Verify Email from binkeyit",
html:verifyEmailTemplate({
    name,
})

})

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }

}