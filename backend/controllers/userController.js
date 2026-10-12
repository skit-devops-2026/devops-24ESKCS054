const UserAuth = require("../models/UserAuth");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

exports.register = async (req, res) => {

    try {

        // Validation Check

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({

                success: false,

                errors: errors.array()

            });

        }

        const { name, email, password } = req.body;

        // Email Already Exists

        const user = await UserAuth.findOne({ email });

        if (user) {

            return res.status(400).json({

                success: false,

                message: "Email Already Registered"

            });

        }

        // Password Hash

        const hashedPassword = await bcrypt.hash(password, 10);

        // Save User

        const newUser = await UserAuth.create({

            name,

            email,

            password: hashedPassword

        });

        res.status(201).json({

            success: true,

            message: "User Registered Successfully",

            data: {

                id: newUser._id,

                name: newUser.name,

                email: newUser.email

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


exports.login = async (req, res) => {

    try {

        // Validation

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({

                success: false,

                errors: errors.array()

            });

        }

        const { email, password } = req.body;

        // Check User

        const user = await UserAuth.findOne({ email });

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }

        // Compare Password

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(401).json({

                success: false,

                message: "Invalid Password"

            });

        }

        // JWT Token

        const token = jwt.sign(

            {

                id: user._id

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1h"

            }

        );

        res.status(200).json({

            success: true,

            message: "Login Successfully",

            token,

            data: {

                id: user._id,

                name: user.name,

                email: user.email

            }

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


exports.profile = async (req, res) => {

    try {

        const user = await UserAuth.findById(

            req.user.id

        ).select("-password");

        if (!user) {

            return res.status(404).json({

                success: false,

                message: "User Not Found"

            });

        }

        res.status(200).json({

            success: true,

            data: user

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};