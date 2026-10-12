const User = require("../models/User");

const bcrypt = require("bcrypt");

const createAdmin = async()=>{

    try{

        const admin = await User.findOne({
            email:process.env.ADMIN_EMAIL
        });

        if(admin){

            console.log("Admin Already Exists");

            return;

        }

        const hashedPassword = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            10
        );

        await User.create({

            name:process.env.ADMIN_NAME,

            email:process.env.ADMIN_EMAIL,

            password:hashedPassword

        });

        console.log("Default Admin Created");

    }

    catch(error){

        console.log(error.message);

    }

}

console.log("Checking Admin...");