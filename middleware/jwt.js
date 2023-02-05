const jwt = require('jsonwebtoken')

const SECRET = 'secret-bingleshop-v1'

const createToken = (payload) => jwt.sign(payload,SECRET)
const verifyToken = (token) => jwt.verify(token,SECRET)

module.exports = {createToken,verifyToken}