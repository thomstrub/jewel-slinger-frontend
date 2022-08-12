import React from 'react';
import Form from 'react-bootstrap/Form';

interface IAddItemForm {
    item: any,
    handleItem : any,
    submit: any
  }


export default function AddItemForm({item, handleItem, submit}: IAddItemForm) {


  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3">
        <Form.Label>Item Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter name" value={item.name} onChange={handleItem}/>
        <Form.Text className="text-muted">
          How would you like to refer to this item?
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Size</Form.Label>
        <Form.Control name='size' type="text" placeholder="Item Size" value={item.size} onChange={handleItem}/>
        <Form.Text className="text-muted">
          How big is it? Include Units.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Description</Form.Label>
        <Form.Control name='description' type="text" placeholder="Item Description" value={item.description} onChange={handleItem}/>
        <Form.Text className="text-muted">
          How would you describe this?
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control name='quantity' type="number" placeholder="Quantity" min='0' value={item.quantity as number} onChange={handleItem}/>
        <Form.Text className="text-muted">
          How would you describe this?
        </Form.Text>
      </Form.Group>
    
    </Form>
  );
}
