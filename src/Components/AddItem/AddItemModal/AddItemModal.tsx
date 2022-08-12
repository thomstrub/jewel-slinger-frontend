import React from 'react';
import ModalComponent from '../../ModalComponent/ModalComponent';
import AddItemForm from '../AddItemForm/AddItemForm';

interface AddItemModalProps {
  item: any,
  handleItem : any,
  submit: any
}

export default function AddItemModal(props: AddItemModalProps) {

  function returnForm(item: string, handleItem: any, submit: any){
    return <AddItemForm item={item} handleItem={handleItem} submit={submit} />
  }

  return (
    
     <ModalComponent title='Add an Item' form={returnForm(props.item, props.handleItem, props.submit)} submit={props.submit} />

    
  );
}