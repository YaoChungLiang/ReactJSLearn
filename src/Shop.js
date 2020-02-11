import React,{useState, useEffect} from 'react';
import './App.css';

function Shop(){

    useEffect(() => {
        fetchItems();
    },[]);  

    const [items, setItems] = useState([]);

    const fetchItems = async() =>{
        const data = await fetch('https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch');
        
        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    };  



    return(
        /*
        <div>
            {items.map(item=>(
                <h1>{item.name}</h1>
            ))}
        </div>*/
        <div>
            Hi Jefferey
        </div>
        );
}
export default Shop;