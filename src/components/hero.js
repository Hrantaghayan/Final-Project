import React from "react";
import { useAuth } from "../context";
export function Hero(){
const {user,logout} = useAuth()
return (
    <div className="hero">
        <div>{user.email}</div>
        <button onClick={()=>{
            logout()
        }}>Log out</button>
    </div>
)
}