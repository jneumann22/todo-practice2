const sequelize = require('./index.js')
const Sequelize = require('sequelize')

const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    quantity: Sequelize.INTEGER
})

Item.sync()

module.exports = Item