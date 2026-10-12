const express=require("express");

const router=express.Router();

const authMiddleware=require("../middleware/authMiddleware");

const{

login,

profile

}=require("../controllers/authController");

router.post("/login",login);

router.get(

"/profile",

authMiddleware,

profile

);

module.exports=router;