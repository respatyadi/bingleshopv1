const express = require('express')
const app = express();
// const cors = require("cors");
const ControllerUser = require('./controller/controllerUsers')
const ControllerProduct = require("./controller/controllerProducts")
const ControllerOrder = require('./controller/controllerOrders')
const ControllerItem = require('./controller/controllerItems');
const ControllerRole = require('./controller/controllerRoles');
// const authentification = require('./middlewares/authen')
const port = 3000
// const authentification = require('./middlewares/authen')

// var corsOptions = {
//     origin: "http://localhost:8081"
//   };

// app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.send('Hello')
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/role', ControllerRole.getRoles)

app.post('/role/add', ControllerRole.addRoles)

// app.get('/roles', ControllerRole.getRoles)

// app.post('/roles/add', ControllerRole.addRoles)

app.get('/user', ControllerUser.getUsers)

app.post('/user/register', ControllerUser.registerUsers)

app.post('/user/login', ControllerUser.login)

// app.get('/user', ControllerUser.getUsers)

// app.post('/register', ControllerUser.registerUsers)

// app.post('/login', ControllerUser.login)

app.get('/product', ControllerProduct.getProducts)

app.post('/product/register', ControllerProduct.registerProducts)

// app.get('/products', ControllerProduct.getProducts)

// app.post('/products/register', ControllerProduct.registerProducts)

app.get('/order', ControllerOrder.getOrders)

app.post('/order/add', ControllerOrder.addOrders)

// app.get('/orders', ControllerOrder.getOrders)

// app.post('/orders/add', ControllerOrder.addOrders)

app.get('/item', ControllerItem.getItems)

app.post('/item/add', ControllerItem.addItems)

// app.get('/items', ControllerItem.getItems)

// app.post('/items/add', ControllerItem.addItems)

app.listen(port, () => {
    console.log(`tes port bisa ${port}`)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
