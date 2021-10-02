import React from 'react';
import './Order.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = (props) => {
    let {name, category, img, price, seller,quantity,key} = props.cart;
    return (
        <div>
            <div className="cart-contaienr" >
                <div className="img-fild"  >
                <img src={img} alt="" />
                </div>
                <div className="txt-fild" >
                    <h5>{name} </h5>
                    <h6> seller: {seller} </h6>
                    <h5> category: {category}</h5>
                    <h6> quantity: {quantity} </h6>
                    <h6>${price}</h6>
                    <div>
                        <button onClick={()=> props.hendleRemove(key)} className="btn btn-warning" > Remove </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Order;