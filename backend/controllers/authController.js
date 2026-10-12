const User=require("../models/User");

const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");

exports.login=async(req,res)=>{

    try{

        const {email,password}=req.body;


        const user=await User.findOne({email});

        if(!user){

            return res.status(404).json({

                message:"User Not Found"

            });

        }

        const isMatch=await bcrypt.compare(

            password,

            user.password

        );

        if(!isMatch){

            return res.status(401).json({

                message:"Invalid Password"

            });

        }

        const token=jwt.sign(

            {

                id:user._id

            },

            process.env.JWT_SECRET,

            {

                expiresIn:"1h"

            }

        );

        res.json({

            token

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

exports.profile=async(req,res)=>{

    try{

        const user=await User.findById(

            req.user.id

        ).select("-password");

        res.json(user);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};