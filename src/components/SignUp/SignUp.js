import React from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <div className="container">
            {/* <form onSubmit=""> */}
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <input type="submit" value="SignUp" className="my-2 btn btn-warning " />
                <p className="text-right forgot-password">
                    Already registered <Link to='/login'>sign in?</Link>
                </p>
            {/* </form> */}
        </div>
    );
};

export default SignUp;