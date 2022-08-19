import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCard(props:any) {
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
          <ul>
            <li>Size: {props.item.size}</li>
            <li>Description: {props.item.description}</li>
            <li>Quantity: {props.item.quantity}</li>
          </ul>
        </Card.Text>
        <Button variant="danger" name={props.item._id} onClick={props.handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  )
}
