import React from 'react';

const ListItem = (props) => {
    return(
        <li>
            {props.item.name}
            {'    '}
            {props.item.quantity}
            <button onClick = {() => {props.deleteItem(props.item.id)}}>delete</button>
            <button onClick = {() => {props.updateItem(props.item.id)}}>edit</button>
        </li>
    )
}

export default ListItem