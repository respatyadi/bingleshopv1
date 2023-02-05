const {Item} = require("../models")

class ControllerItem {
    static async getItems(req, res, next) {
        try {
            let getData=await Item.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
            
        }
    }
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
}
module.exports = ControllerItem
