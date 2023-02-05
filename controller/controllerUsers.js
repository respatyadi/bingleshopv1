const { hashedPassword, comparePassword } = require("../middleware/bcrypt");
const { createToken } = require("../middleware/jwt");
const { User } = require("../models/index")
const bcrypt = require('bcryptjs')

class ControllerUser {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
        
            if (!email) {
              return res.status(400).json({ message: "Email is required" });
            }
            if (!password) {
              return res.status(400).json({ message: "Password is required" });
            }
            const data = await User.findOne({
              where: {
                email,
              },
            });
        
            if (!data) {
              return res.status(401).json({ message: "Invalid email/password" });
            }
        
            const comparePassword = bcrypt.compareSync(password, data.password);
            if (!comparePassword) {
              return res.status(400).json({ message: "Invalid email/password" });
            }
            const payload = {
              id: data.id,
              email: data.email,
            };
            const access_token = createToken(payload);
            res.status(200).json({ access_token });

          } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Internal server error" });
          }
    }
    static async getUsers(req, res, next) {
        try {
            let getData = await User.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }
    static async registerUsers(req, res, next) {
        try {
            let {username,email,password,phone,address,RoleId}=req.body
            let addUser=await User.create({
                username,
                email,
                password,
                phone,
                address,
                RoleId
            })
            res.status(200).json(addUser)
        } catch (error) {
            console.log(error)
    next(error)
}
    }
}
module.exports = ControllerUser