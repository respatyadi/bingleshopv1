const express = require('express')
const app = express();
const ControllerUser = require('./controller/controllerUsers')
const ControllerProduct = require("./controller/controllerProducts")
const ControllerOrder = require('./controller/controllerOrders')
const ControllerItem = require('./controller/controllerItems');
const ControllerRole = require('./controller/controllerRoles');
const {authentification} = require('./middleware/authen')
const port = 3000

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {res.send('Bingleshopv1')})

app.get('/role', ControllerRole.getRoles)

app.post('/role/add',authentification, ControllerRole.addRoles)

app.post('/role/update/:id',authentification, ControllerRole.updateRoles)

app.post('/role/delete/:id',authentification, ControllerRole.deleteRoles)

app.get('/user', ControllerUser.getUsers)

app.post('/user/register', ControllerUser.registerUsers)

app.post('/user/login', ControllerUser.login)

app.post('/user/update/:id', ControllerUser.updateUsers)

app.post('/user/delete/:id', ControllerUser.deleteUsers)

app.get('/product',authentification, ControllerProduct.getProducts)

app.post('/product/add',authentification, ControllerProduct.addProducts)

app.post('/product/update/:id',authentification, ControllerProduct.updateProducts)

app.post('/product/delete/:id',authentification, ControllerProduct.deleteProducts)

app.get('/order',authentification, ControllerOrder.getOrders)

app.post('/order/add',authentification, ControllerOrder.addOrders)

app.post('/order/update/:id',authentification, ControllerOrder.updateOrders)

app.delete('/order/delete/:id',authentification, ControllerOrder.deleteOrders)

app.get('/item',authentification, ControllerItem.getItems)

app.post('/item/add',authentification, ControllerItem.addItems)

app.post('/item/update/:id',authentification, ControllerItem.updateItems)

app.post('/item/delete/:id',authentification, ControllerItem.deleteItems)

app.listen(port, () => {
    console.log(`tes koneksi ke port ${port}`)
})