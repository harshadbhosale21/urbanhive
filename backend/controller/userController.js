import User from "../model/userModel.js";
import bcrypt from 'bcrypt';
import genToken from '../utils/genToken.js'


export const Signup = async (req, res) => {
    try {

        const { fullName, email, phoneNumber, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password not matched" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "An account with this email already exist !" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName: fullName,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword
        });

        if (newUser) {

            const token = genToken(newUser._id);
            await newUser.save()

            res.status(201).json({
                message: "User Created Successfully",
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                token: token
            })
        }
        else {
            res.status(400).json({ error: 'Invalid user Data' })
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const Login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({
                error: "Invalid Email or Password"
            });
        }

        const token = genToken(user._id, res);

        res.status(200).json({
            message: "Login Successfull",
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            token: token
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const LogOut = async (req, res) => {
    try {

        res.status(200).json({ message: 'User Logout Successful' })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}