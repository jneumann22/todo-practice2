const Item = require('./model.js')

const addItemHelper = (name, quantity, callback) => {
    Item.create({name, quantity}).then(callback)
}

const deleteItemHelper = (id, callback) => {
    Item.destroy({where: {id}}).then(callback)
}

const getItemsHelper = (callback) => {
    Item.findAll({}).then(callback)
}

const editItemHelper = (name, quantity, id, callback) => {
    Item.update({name, quantity}, {where: {id}}).then(callback)
}

module.exports = {addItemHelper, deleteItemHelper, getItemsHelper, editItemHelper}