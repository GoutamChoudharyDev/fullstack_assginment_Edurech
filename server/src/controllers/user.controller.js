import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create register controller
const registerUser = async (req, res) => {
    try {
        // get data from frontend(req.body)
        const { fullName, email, password } = req.body;

        // validation
        if (!fullName?.trim() || !email?.trim() || !password?.trim()) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // isUser already exists or not ?
        const existedUser = await User.findOne({ email })
        if (existedUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create new user
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword
        })

        if (!user) {
            return res.status(500).json({
                success: false,
                message: "Internal server error while register a user"
            })
        }

        // return res to frontend
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                fullName,
                email
            }
        })
    } catch (error) {
        console.log("register error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error while regiset a user"
        })
    }
}

// create login controller
const loginUser = async (req, res) => {
    try {
        // get data from frontend
        const { email, password } = req.body;

        // validation
        if (!email?.trim() || !password?.trim()) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        // find user using email
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        // check password
        const isPasswordCorrect = await bcrypt.compare(password?.trim(), user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Password doesn't match"
            })
        }

        // generate jwt token
        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: process.env.TOKEN_EXPIRY
            }
        )

        // return success response
        return res
            .status(200)
            .cookie("token", token)
            .json({
                success: true,
                message: "User loggedIn successfully",
                user: {
                    _id: user._id,
                    email: user.email,
                    fullName: user.fullName
                }
            })

    } catch (error) {
        console.log("login error : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error while login a user"
        })
    }
}

// create logout controller
const logoutUser = async (req, res) => {
    return res
        .status(200)
        .clearCookie("token")
        .json({
            success: true,
            message: "User loggedOut successfully"
        })
}

// export controllers
export {
    registerUser,
    loginUser,
    logoutUser
}