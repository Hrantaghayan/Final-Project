import React from "react";
import Clock from "./clock";
import './main.css'
import Image from "./image";
import Title from './hederCenter'
import { useAuth } from "../context";
import { useState, useEffect } from "react";
import {
    doc,
    getDoc,
  } from "firebase/firestore";
  import { db } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";
//   import { AboutUs } from "./about-us";
export default function Header(){
   let {user,logout} = useAuth()
   const [username,setusername]=useState('')   
   const navigate = useNavigate() 
useEffect(()=>{
 const docref =  doc(db,"userinformation",user.uid)
 getDoc(docref)
 .then((data)=>{
    console.log(data.data())
    setusername(data.data().username)
 },[])  
},[user])
    return (
        <div className="haeder">
        <div className="headerItem1"> 
           <div className="headerItem1Left">
              <Image src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-casino-badge-vector-illustration-badge-icon-png-image_5253117.jpg"/>
              <Image src="https://1000logos.net/wp-content/uploads/2021/04/Telegram-logo.png" />
              <Clock />
           </div> 
           <div className="headerItem1Center">
            <Title />
           </div>
           <div className="headerItem1Right">
           <div className="butten">
            <button onClick={()=>{
                logout()
            }}>Log out</button>
            <button className="hist">See Gamehistory</button>
           </div>
           <span  className="userName">Welcome {username}</span>
           </div> 
        </div>
        <div className="headerItem2">
            <div className="headerItem1chaild">HOME</div>
            <div className="headerItem2chaild" onClick={()=>{
                navigate('/Casino')
            }}>CASINO</div>
            <div className="headerItem2chaild" onClick={()=>{
                navigate('/Aboutus')
            }}>ABOUT US</div>
        </div>
        </div>
    )
}