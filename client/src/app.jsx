import React from 'react';

import List from './list.jsx';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listInit: [],
            name: '',
            quantity: null
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.updateInputName = this.updateInputName.bind(this);
        this.updateInputQuantity = this.updateInputQuantity.bind(this);
    }


componentDidMount() {
    this.getAllItems()
}

addItem(e) {
    e.preventDefault();
    let {name, quantity} = this.state;
    axios
    .post('/api', {name, quantity})
    .then(this.getAllItems)
    .then(document.getElementById('iname').value= '')
    .then(document.getElementById('quant').value = '')
    .catch(err => console.error(err))
}

deleteItem(id) {
    axios
    .delete(`/api/${id}`)
    .then(this.getAllItems)
    .catch(err => console.error(err))
}

getAllItems(){
    axios
    .get('/api', {})
    .then(({data}) => this.setState({listInit: data}))
    .catch(err => console.error(err))
}

updateItem(id){
    let nameChange = window.prompt('Change Item Name');
    let quantityChange = window.prompt('Change Quantity');
    axios
    .put('/api', {name: nameChange, quantity: quantityChange, id: id})
    .then(this.getAllItems)
    .then()
    .catch(err => console.error(err))

}

updateInputName(e) {
let {value} = e.target
this.setState({name: value})
}

updateInputQuantity(e) {
    let {value} = e.target
    this.setState({quantity: value})
}




    render() {
        return (
            <div>
            <form action = '' onSubmit = {this.addItem}>
            <input id = 'iname' type = "text" onChange = {this.updateInputName} placeholder = "Item Name"/>
            <input id = 'quant' type = "text" onChange = {this.updateInputQuantity} placeholder = "Quantity"/>
            <button>add</button>
            </form>

            <List list = {this.state.listInit} deleteItem = {this.deleteItem} updateItem = {this.updateItem} />
            </div>
        )
    }
}

export default App;