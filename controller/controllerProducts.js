const {Product} = require("../models")
//Menampilkan Data Product
class ControllerProduct {
    static async getProducts(req, res, next) {
        try {
            let getData=await Product.findAll({})
            res.status(200).json(getData)
        } catch (error) {
            next(error)
        }
    }
//Menambahkan Data Product
    static async addProducts(req, res, next) {
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
//Mengubah Data Product
static async updateProducts(req, res, next) {
    let {id} = req.params;
    let {productname,
        price,
        stock,
        UserId,
        sku}= req.body;
    try {
        let dataProduct = await Product.findOne(
    {
        where: {
        id: id,
        },
        });
        console.log(dataProduct)
        let updateData=await dataProduct.update({
            productname,
            price,
            stock,
            UserId,
            sku
        })
        res.status(200).json(updateData)
    } catch (error) {
        console.log(error)
next(error)
}
}
//Menghapus Data Product
static async deleteProducts(req, res, next) {
    let {id} = req.params;
    try {
        let deleteProduct = await Product.destroy(
    {
        where: {
        id: id,
        },
        });
        res.status(200).json(deleteProduct)
    } catch (error) {
        console.log(error)
next(error)
}
}
}
module.exports = ControllerProduct