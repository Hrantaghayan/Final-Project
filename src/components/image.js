import React from "react";
import './main.css'
export default function Name(prop){
    return(
        <div className="headerIcon">
         <p>{prop.username}</p>
        </div>
    )
}