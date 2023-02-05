const {Order} = require("../models")

class ControllerOrder {
    static async getOrders(req, res, next) {
        try {
            let getData=await Order.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
            
        }
    }
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

            let updateData=await dataOrder.update({
                status,total,UserId,ItemId
            })
            res.status(200).json(updateData)
        } catch (error) {
    next(error)
}
    }
}
module.exports = ControllerOrder
