import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/CustomFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import products from '../utils/Products';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    console.log("ItemListContainer",products) 
    console.log("datos",datos)
    return (
        <>  
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;