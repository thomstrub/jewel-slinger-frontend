import React from 'react'
export default function ItemCard(props:any) {
 
  return (
    <div>
        <p>{props.item.name}</p>
    <button name={props.item._id} onClick={props.handleDelete}>Delete</button>
    </div>
  )
}
