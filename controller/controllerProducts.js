const {Product} = require("../models")

class ControllerProduct {
    static async getProducts(req, res, next) {
        try {
            let getData=await Product.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
            
        }
    }
    static async registerProducts(req, res, next) {
        try {
            let {productname,price,stock,sku,UserId}=req.body

            let addData=await Product.create({
                productname,
                price,
                stock,
                sku,
                UserId
            })
            res.status(200).json(addData)
        } catch (error) {
    next(error)
    
}
}
}
module.exports = ControllerProduct
