const jwt = require('jsonwebtoken')

const SECRET = 'secret-bingleshop-v1'

// const jwt = require('jsonwebtoken')
// const SECRET = 'secret-bingleshop'

const createToken = (payload) => jwt.sign(payload,SECRET)
const verifyToken = (token) => jwt.verify(token,SECRET)

// const createToken = (payload) => jwt.sign(payload,SECRET)
// const verifyToken = (token) => jwt.verify(token,SECRET)

module.exports = {createToken,verifyToken}