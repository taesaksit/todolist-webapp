import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const registerUser = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "No data provided." });
    }
    const userData = new User(req.body);
    const { firstname, username, password } = userData;
    console.log(userData);
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.json({
        status: "error",
        message: "Username already exists.",
        data: {},
      });
    }
    //* Encrypt Hash
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //* New User
    const newUser = new User({
      firstname,
      username,
      password: hashedPassword,
    });
    //* Saved user
    const savedUser = await newUser.save();
    res.json({
      status:"success",
      message:"Register successfully",
      data:savedUser
    });
  } catch (error) {
    console.error("Error is: ", error);
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    // 1. ตรวจสอบว่าใส่ User และ Password
    const missingFields = [];
    if (!username) missingFields.push("Username");
    if (!password) missingFields.push("Password");
    if (missingFields.length > 0) {
      return res
        .status(400)
        .json({ message: `${missingFields.join(", ")} are required !` });
    }

    // 2. ตรวจสอบว่ามี Username นี้ใน Database หรือไม่
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({
        status: "error",
        message: "Username not found.",
        data: {},
      });
    }

    // 3. เปรียบเทียบ Password ที่รับเข้ามากับ Password ใน Database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        status: "error",
        message: "Invalid password.",
        data: {},
      });
    }

    // 4. สร้าง JWT Token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token มีอายุ 1 ชั่วโมง
    );

    // 5. ส่ง Token กลับไปที่ Client
    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        firstname: user.firstname,
        username,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
