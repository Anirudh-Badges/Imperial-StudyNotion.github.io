const User = require("../modals/User");
const OTP = require("../modals/OTP");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// setotp
exports.sendOTP = async (req, res) => {
    try {
        // fetch email from req ki body
        const { email } = req.body;

        // check if user already exist
        const checkUserPresent = await User.findOne({ email });

        // if user already exists , then return a response
        if (checkUserPresent) {
            return res.status(401).json({
                success: false,
                message: "user already registered",
            })
        }
        // generate otp
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        // check unique otp or not
        const result = await OTP.findOne({ otp: otp });
        while (result) {
            otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            const result = await OTP.findOne({ otp: otp });
        }

        const otpPayload = { email, otp };
        // create an entry for otp
        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        // return response successful
        res.status(200).json({
            success: true,
            message: 'OTP Sent Successfully',
            otp,
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// signup
exports.signUp = async (req, res) => {
    try {
        // data fetch from req ki body
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            accountType,
            contactNumber,
            otp
        } = req.body;

        // validate krlo
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            })
        }

        // 2 password match krlo
        if (password != confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password & confirmPassword value doesn't match ,please try again",
            });
        }

        // check user already exist or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User is already exists",
            });
        }

        // find most recent otp stored for user
        const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log(recentOtp);
        // validate otp
        if (recentOtp.length == 0) {
            return res.status(400).json({
                success: false,
                message: "OTP Found",
            });
        } else if (otp !== recentOtp.otp) {
            // invalid otp
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            });
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // entry create in db
        const profileDetails = await Profile.create({
            gender: null,
            dateOfBirth: null,
            about: null,
            contactNumber: null,
        });

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            confirmPassword,
            accountType,
            contactNumber,
            additionalDetails: profileDetails._id,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        });

        // return res
        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered ,Please try again",
        })
    }
}

// login
exports.login = async (req, res) => {
    try {
        // get data from req body
        const { email, password } = req.body;
        // validation data
        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }
        // user eists or not
        const user = await User.findOne({ email }).populate("additonalDetails");
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered please sign up first",
            });
        }
        // generate jwt, after password matching
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            user.token = token;
            user.password = undefined;

            // create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "Logged in successfully",
            });
        }else{
            return res.status(401).json({
                success : false,
                message:"Password is incorrect",
            });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success : false,
            message:"Lodin failed Please try again",
        })
    }
}


// change password.