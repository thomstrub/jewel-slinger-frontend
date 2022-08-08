import React, {useContext} from "react";
import styles from './NavBar.module.css';
import { Link } from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import { myContext } from "../../Context";
import { IUser } from "../../types/maintypes";

export default function Navbar() {
    const context = useContext(myContext) as IUser;

    const logout = () => {
        console.log("logout click firing");
        axios.get("http://localhost:4000/auth/logout", {
            withCredentials: true
    }).then((res: AxiosResponse)=> {
            console.log(res, "<------ response from logout")
            if(res.data === "done"){
                
                window.location.href = "/";
            }
        })
    }
    return(
        <div className={styles.navBarWrapper}>
            <ul className={styles.navBar}>
                <li><Link to='/'>Home</Link></li>
                {context ? 
                <li onClick={logout}>Log Out</li>
                :
                <li><Link to='/login'>Login</Link></li>
                }
            </ul>
        </div>
    )
       
       
}