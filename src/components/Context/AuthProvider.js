import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';



export let AuthContext = createContext();
const AuthProvider = (props) => {
    let { children } = props;
    let allcontext = useFirebase();
    return (
        <AuthContext.Provider value={allcontext}>   
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;