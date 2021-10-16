import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';



const Login = () => {
    let {SignInWithGoogle} = useAuth();
    let location = useLocation();
    let history = useHistory()
    let redirect = location.state?.from || '/shop' ;
    
    let handleGoogleLogin =() =>{
        SignInWithGoogle()
        .then(res => {
            history.push(redirect);
        })
        // .catch(error => {
        //     setError(error);
        // })
    }
    return (
        <div className="container" >
            {/* <form onSubmit=""> */}

                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                {/* <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div> */}
                <p className="text-right">
                    you dont have account so  <Link to="/signUp"> Sign Up </Link>
                </p>

                {/* <button className="btn btn-warning" >Submit</button> */}
                <input type="submit" value="Login" className="btn btn-warning" />
                
                <div>
                    <p>____________________________ or ____________________________________ </p>
                    <button className="btn-warning btn" onClick={handleGoogleLogin}> Google Login </button>
                </div>
            {/* </form> */}

        </div>
    );
};




export default Login;