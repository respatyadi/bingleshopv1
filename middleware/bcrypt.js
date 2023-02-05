const bcrypt=require('bcryptjs')

// const bcrypt = require('bcryptjs')
const hashedPassword = (password) => bcrypt.hashSync(password,10)

const comparePassword = (password,hashedPassword) => bcrypt.compareSync(password,hashedPassword)

// const hashPassword = (password) => bcrypt.hashSync(password,10)
// const comparePassword = (password,hashedPassword) => bcrypt.compareSync(password,hashedPassword)

module.exports = {hashedPassword,comparePassword}