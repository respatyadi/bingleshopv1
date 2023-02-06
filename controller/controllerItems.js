const {Item} = require("../models")
// Menampilkan Data Item
class ControllerItem {
    static async getItems(req, res, next) {
        try {
            let getData=await Item.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }
// Menambahkan Data Item
    static async addItems(req, res, next) {
        try {
            let {qty,price,ProductId,OrderId}=req.body
            let addData=await Item.create({
                qty,
                price,
                ProductId,
                OrderId
            })
            res.status(200).json(addData)
        } catch (error) {
    next(error)
}
}
// Mengubah Data Item
    static async updateItems(req, res, next) {
        let {id} = req.params;
        let {qty,price,ProductId}= req.body;
    try {
        let dataItem = await Item.findOne(
    {
        where: {
        id: id,
        },
        });
        console.log(dataItem)
        let updateData=await dataItem.update({
            qty,price,ProductId
        })
        res.status(200).json(updateData)
    } catch (error) {
        console.log(error)
next(error)
}
}
// Menghapus Data Item
static async deleteItems(req, res, next) {
    let {id} = req.params;
    try {
        let deleteItem = await Item.destroy(
    {
        where: {
        id: id,
        },
        });
        res.status(200).json(deleteItem)
    } catch (error) {
        console.log(error)
next(error)
}
}
}
module.exports = ControllerItem