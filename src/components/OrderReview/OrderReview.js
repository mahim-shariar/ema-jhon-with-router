// import React, { useEffect } from 'react';
import useProducts from '../hooks/useProduct';
import './OrderReview.css'
import useCart from '../hooks/useCart';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import NoOrder from '../NoOrder/NoOrder';

const OrderReview = () => {
    let [products] = useProducts();
    let [cart ,setCart] = useCart(products);
    let history = useHistory();
    console.log(cart);
    let hendleRemove = key =>{
        let newCart = cart.filter(item => item.key !== key)
        setCart(newCart);
        deleteFromDb(key);
    }
    let handlePlaceOrder = () =>{
        if(!cart.length){
            <NoOrder></NoOrder>
            history.push('/noOrder')
        }
        else{
            history.push('/shipping')
            // setCart([]);
            // clearTheCart()
        }
    }
    return (
        <div>
            <div className="container container-fild " >
            <div>
                {
                    cart.map( item => <Order key={item.key} hendleRemove={hendleRemove} cart={item}></Order>  )
                }
            </div>
               
                <div className="summary" >
                    <Cart cart={cart} ></Cart>
                    <div> 
                        <button onClick={handlePlaceOrder} className="mb-3 btn btn-warning " > Proceed to shipping </button>    
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OrderReview;
