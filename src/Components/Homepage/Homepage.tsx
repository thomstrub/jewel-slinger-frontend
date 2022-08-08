import React, { useContext } from "react";
import { myContext } from "../../Context";
import { IUser } from "../../types/maintypes";

export default function HomePage() {
    const context = useContext(myContext) as IUser;
    return(
        <div>
        {
            context ? 
                <h1>Welcome, {context.username}</h1>
            :   <h1>Welcome To the Website</h1>
        
        }    
        </div>
    )
}