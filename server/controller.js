const {addItemHelper, deleteItemHelper, getItemsHelper, editItemHelper} = require('../database/dbHelpers.js');

const addItem = (req, res) => {
    let {name, quantity} = req.body
    addItemHelper(name, quantity, () => res.status(201).send('added')) 
}

const deleteItem = (req, res) => {
    let {id} = req.params
    deleteItemHelper(id, ()=> res.status(204).send('deleted'))
}

const getItems = (req, res) => {
    getItemsHelper((result)=> res.status(200).send(result))
}

const editItem = (req, res) => {
    let {name, quantity, id} = req.body
    editItemHelper(name, quantity, id, ()=> res.status(203).send('updated'))
    
}

module.exports = {addItem, deleteItem, editItem, getItems}