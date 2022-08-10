import React from 'react'
import AddItemModal from '../../Components/AddItem/AddItemModal/AddItemModal';

export default function IndexPage() {

  function addItem(){
    console.log("item add firing");
  }  
  return (
    <div>
        <p>This is where the item cards will list</p>
        <AddItemModal />
    </div>
  )
}
