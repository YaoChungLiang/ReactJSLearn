import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop(){

    useEffect(() => {
        FetchItems();
    },[]);  

    const [items, setItems] = useState([]);

    const FetchItems = async() =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        const items = await data.json();
        console.log(items[0]);
        setItems(items);
    };  


    return(
            <div>
                {
                    items.map(item=>(
                        <h1 key={item.id}>
                            <Link to ={`/shop/${item.title}`}>{item.title}</Link>
                        </h1>
                    ))
                }
            </div>
        );
}
export default Shop;