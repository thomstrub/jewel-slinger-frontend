import React from 'react'

export default function IndexPage() {

  function addItem(){
    console.log("item add firing");
  }  
  return (
    <div>
        <p>This is where the item cards will list</p>
        <button onClick={addItem}>add an item</button>
    </div>
  )
}
