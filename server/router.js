const express = require('express');
const {addItem, deleteItem, editItem, getItems} = require('./controller.js');

const router = express.Router();

router.route('/')
.get(getItems)
.post(addItem)
.put(editItem)

router.route('/:id')
.delete(deleteItem)


module.exports = router;