const { hashedPassword, comparePassword } = require("../middleware/bcrypt");
const { createToken } = require("../middleware/jwt");
const { User } = require("../models/index")
const bcrypt = require('bcryptjs')

//Akses Login User menggunakan kondisi email dan password harus sesuai dan menggunakan access_token untuk autentikasi
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
//Menampilkan data User
    static async getUsers(req, res, next) {
        try {
            let getData = await User.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }
//Registrasi User
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
//Mengubah Data User
    static async updateUsers(req, res, next) {
        let {id} = req.params;
        let {username,email,password,phone,address,RoleId}= req.body;
        try {
            let dataUser = await User.findOne(
        {
            where: {
            id: id,
            },
            });
            console.log(dataUser)
            let updateData=await dataUser.update({
                username,email,password,phone,address,RoleId
            })
            res.status(200).json(updateData)
        } catch (error) {
            console.log(error)
    next(error)
    }
    }
//Menghapus Data User
    static async deleteUsers(req, res, next) {
        let {id} = req.params;
        try {
            let deleteUser = await User.destroy(
        {
            where: {
            id: id,
            },
            });
            res.status(200).json(deleteUser)
        } catch (error) {
            console.log(error)
    next(error)
    }
    }
}
module.exports = ControllerUser