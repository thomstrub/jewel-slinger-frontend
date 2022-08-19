import axios, {AxiosResponse} from 'axios';
import React, {useState, useEffect} from 'react'
import AddItemModal from '../../Components/AddItem/AddItemModal/AddItemModal';
import { IItem, IMongoDBItem } from '../../types/maintypes';
import ItemCard from '../../Components/ItemCard/ItemCard';

interface IMongoDBItems extends Array<IMongoDBItem>{};

export default function IndexPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<IMongoDBItems>([]);

    const [item,setItem] = useState<IItem>({
        name: '',
        price: '',
        quantity: 0,
        photo: '',
        description: '',
        size: ''
    })

    useEffect(() => {
        fetchItems();
    }, []);

    const axiosClient = axios.create({baseURL: "https://jewel-slinger-backend.herokuapp.com/items", withCredentials: true});

    async function fetchItems(){
        try{
            await axios.get("https://jewel-slinger-backend.herokuapp.com/items", {withCredentials: true}).then( (res: AxiosResponse) => {            
            setItems([...res.data.items]);
            console.log(res.data, "<------ items from fetch items")
            setLoading(false);
        })
        } catch(err: unknown){
            console.log(err, " <--- error from fetchItems");
        }
        
    } 

    async function submit(){
        console.log("form submit firing");
        const res = await axios.post('https://jewel-slinger-backend.herokuapp.com/items', item, {withCredentials: true});
        console.log(res, "<------ response from save");
        setItems([...items, res.data.post]);
    }

    //dont pass in the whole event to the handler
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

    async function handleDelete(e: any){
        e.preventDefault();
        const item = e.target.getAttribute("name");
        console.log(item, " <------ item from handleDelete")
        await deleteItem(item);
        setItems(items.filter(stateItem => stateItem._id !== item));

    }

    async function deleteItem(itemId: string){
        try{
            const response = await axiosClient.delete(itemId);
            console.log(response);

        } catch(err: unknown){
            console.log(err);
        }
    }


  
   return loading ?
         ( <div>Loading</div>)
    :
     (
    <div>
        <div>
            {
            items.map((item) => (
                <ItemCard item={item} handleDelete={handleDelete}/>
            ))
            }
        </div>
        <p>This is where the item cards will list</p>
        <AddItemModal item={item} handleItem={handleItem} submit={submit}/>
    </div>
    
    
  )
}
