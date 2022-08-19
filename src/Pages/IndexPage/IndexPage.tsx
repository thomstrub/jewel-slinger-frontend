import axios, {AxiosResponse} from 'axios';
import React, {useState, useEffect} from 'react'
import AddItemModal from '../../Components/AddItem/AddItemModal/AddItemModal';
import { IItem, IMongoDBItem } from '../../types/maintypes';
import ItemCard from '../../Components/ItemCard/ItemCard';
import Layout from '../../Components/Layout/Layout';

interface IMongoDBItems extends Array<IMongoDBItem>{};

export default function IndexPage() {
    const [loading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<IMongoDBItems>([]);
    const axiosClient = axios.create({baseURL: "https://jewel-slinger-backend.herokuapp.com/items", withCredentials: true});


    const [item,setItem] = useState<IItem>({
        name: '',
        price: '',
        quantity: 0,
        photo: '',
        description: '',
        size: ''
    })

    useEffect(() => {
        const axiosClient = axios.create({baseURL: "https://jewel-slinger-backend.herokuapp.com/items", withCredentials: true});
        async function fetchItems(){
            try{
                await axiosClient.get('').then( (res: AxiosResponse) => {            
                setItems([...res.data.items]);
                console.log(res.data, "<------ items from fetch items")
                setLoading(false);
            })
            } catch(err: unknown){
                console.log(err, " <--- error from fetchItems");
            }
            
        } 
        fetchItems();
    }, []);


    async function submit(){
        console.log("form submit firing");
        const res = await axios.post('https://jewel-slinger-backend.herokuapp.com/items', item, {withCredentials: true});
        console.log(res, "<------ response from save");
        setItems([...items, res.data.post]);
    }

    function populateItem(currentItem:string, currentValue:(string)): void {
        if(Object.keys(item).includes(currentItem)){
            setItem({...item, [currentItem]: currentValue});
        }
    }

    //dont pass in the whole event to the handler
    function handleItem(e: React.ChangeEvent<HTMLInputElement>): void{
        console.log(e.currentTarget, "<-------- current Target")
        let field = e.currentTarget.name;
        if(field === 'quantity'){     
            setItem({...item, quantity: e.target.value as unknown as number})
        } else if(field.length) {
            populateItem(field, e.currentTarget.value);
        } else {
            throw Error('Form control error.');
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
            <Layout>
                {
                items.map((item) => (
                    <ItemCard item={item} handleDelete={handleDelete}/>
                ))
                }
                <p>This is where the item cards will list</p>
                
                <AddItemModal item={item} handleItem={handleItem} submit={submit}/>
            </Layout>
        </div>

    </div>
    
    
  )
}
