import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AxiosResponse } from 'axios';

export const myContext = createContext({});

export default function Context(props: any) {

    const [userObject, setUserObject] = useState<any>();

    useEffect(() => {
        axios.get("https://jewel-slinger-backend.herokuapp.com/auth/getuser", {withCredentials: true}).then((res: AxiosResponse) => {
            if (res.data){
                setUserObject(res.data);
                console.log(res.data, "<------ user object from context")
            }
        })
    }, [])
  return (
    <div>
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>

    </div>
  )
}
