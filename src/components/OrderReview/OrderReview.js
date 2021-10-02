import React, { useEffect } from 'react';
import useProducts from '../hooks/useProduct';
import './OrderReview.css'
import useCart from '../hooks/useCart';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    let [products, setProducts] = useProducts();
    let [cart ,setCart] = useCart(products);
    console.log(cart);
    let hendleRemove = key =>{
        let newCart = cart.filter(item => item.key !== key)
        setCart(newCart);
        deleteFromDb(key);
    }
    return (
        <div>
            <div className="container-fild container " >
            <div>
                {
                    cart.map( item => <Order key={item.key} hendleRemove={hendleRemove} cart={item}></Order>  )
                }
            </div>
               
                <div className="summary" >
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>

    );
};

export default OrderReview;
