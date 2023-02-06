const {Role} = require("../models")
//Menampilkan Data Role
class ControllerRole {
    static async getRoles(req, res, next) {
        try {
            let getData=await Role.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }
//Menambahkan Data Role
    static async addRoles(req, res, next) {
        try {
            let {rolename,UserId}=req.body
            let chooseRole=await Role.create({
                rolename,UserId
            })
            res.status(200).json(chooseRole)
        } catch (error) {
    next(error)
}
}
//Mengubah Data Role
static async updateRoles(req, res, next) {
    let {id} = req.params;
    let {rolename,UserId}= req.body;
    try {
        let dataRole = await Role.findOne(
    {
        where: {
        id: id,
        },
        });
        console.log(dataRole)
        let updateData=await dataRole.update({
            rolename,UserId
        })
        res.status(200).json(updateData)
    } catch (error) {
        console.log(error)
next(error)
}
}
//Menghapus Data Role
static async deleteRoles(req, res, next) {
    let {id} = req.params;
    try {
        let deleteRole = await Role.destroy(
    {
        where: {
        id: id,
        },
        });
        res.status(200).json(deleteRole)
    } catch (error) {
        console.log(error)
next(error)
}
}
}
module.exports = ControllerRole