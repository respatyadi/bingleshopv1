const {Order} = require("../models")
//Menampilkan Data Order
class ControllerOrder {
    static async getOrders(req, res, next) {
        try {
            let getData=await Order.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }
//Menambahkan Data Order
    static async addOrders(req, res, next) {
        try {
            let {status,total,UserId,ItemId}=req.body
            let addData=await Order.create({
                status,
                total,
                UserId,
                ItemId
            })
            res.status(200).json(addData)
        } catch (error) {
    next(error)
}
}
//Mengubah Data Order
        static async updateOrders(req, res, next) {
        let {id} = req.params;
        let {status,total,UserId,ItemId}= req.body;
        try {
            let dataOrder = await Order.findOne(
        {
            where: {
            id: id,
            },
            });
            console.log(dataOrder)
            let updateData=await dataOrder.update({
                status,total,UserId,ItemId
            })
            res.status(200).json(updateData)
        } catch (error) {
            console.log(error)
    next(error)
}
    }
//Menghapus Data Order
    static async deleteOrders(req, res, next) {
        let {id} = req.params;
        try {
            let deleteOrder = await Order.destroy(
        {
            where: {
            id: id,
            },
            });
            res.status(200).json(deleteOrder)
        } catch (error) {
            console.log(error)
    next(error)
}
    }
}
module.exports = ControllerOrder