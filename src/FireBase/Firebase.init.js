import { initializeApp } from "firebase/app";
import firebaseConfig from './Fire.base.config'

let init = ()=>{
    initializeApp(firebaseConfig);
}

export default init;