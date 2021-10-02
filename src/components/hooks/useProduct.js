import { useEffect, useState } from "react"

let useProducts = () =>{
    let [ products, setProducts] = useState([]); 
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // return necesssary things
    return [products]; 
}

export default useProducts;