import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({ match }){

    useEffect(() => {
        fetchItem();
        console.log();
    },[]);  

    const [item, setItem] = useState({
        images : {}
    });

    const fetchItem = async() =>{
        const fetchItem = await fetch(` https://www.fortnite-public-api/?id=${match.params.id}  `);
       
        console.log(item);
    };  
    const item = fetchItem.json();
    setItem(item);
    console.log(item);


    return(
        <div>
            <h1>{item.name}</h1>
            <img src = {item.images.tr}
        </div>

        );
}
export default Item;