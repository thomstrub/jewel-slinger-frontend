import axios from 'axios';
import React, {useState} from 'react'
import AddItemModal from '../../Components/AddItem/AddItemModal/AddItemModal';
import { IItem } from '../../types/maintypes';


export default function IndexPage() {

   async function submit(){
        console.log("form submit firing");
        const res = await axios.post('https://jewel-slinger-backend.herokuapp.com/items', item, {withCredentials: true});
        console.log(res, "<------ response from save");
    }
    const [item,setItem] = useState<IItem>({
        name: '',
        price: '',
        quantity: 0,
        photo: '',
        description: '',
        size: ''
    })

    function handleItem(e: React.ChangeEvent<HTMLInputElement>): void{
        console.log(e.currentTarget, "<-------- current Target")
        let field = e.currentTarget.name;
        switch(field){
            case 'name':
                setItem({...item, name: e.currentTarget.value});
                break;
            case 'price':
                setItem({...item, price: e.currentTarget.value});
                break;
            case 'quantity':
                setItem({...item, quantity: e.currentTarget.value as unknown as number});
                break;
            case 'photo':
                setItem({...item, photo: e.currentTarget.value});
                break;            
            case 'size':
                setItem({...item, size: e.currentTarget.value});
                break;
            case 'description':
                setItem({...item, description: e.currentTarget.value});
                break;
            default:
                console.log('form field name not found');
                break;
        }
       
    }

  function addItem(){
    console.log("item add firing");
  }  
  return (
    <div>
        <p>This is where the item cards will list</p>
        <AddItemModal item={item} handleItem={handleItem} submit={submit}/>
    </div>
  )
}
