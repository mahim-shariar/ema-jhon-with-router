import React from 'react';
import { NavLink} from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../hooks/useAuth';
import './Header.css';

const Header = () => {
    let {user,logOut} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <span> {user.displayName} </span>
                {
                    user.email ? <button className="my-2 btn-danger btn" onClick={logOut} > LogOut </button>:<NavLink to="/login">Login</NavLink> 
                }
            </nav>
        </div>
    );
};

export default Header;