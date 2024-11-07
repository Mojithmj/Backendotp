const express=require ('express')
const router=express.Router()
const userController=require('../Controller/Controller')

router.post('/Signup',userController.Signup)
router.post('/otpVerify',userController.otpVerify)
router.post('/resendOtp',userController.resendOtp)
router.post('/SignIn',userController.SignIn)




module.exports=router
