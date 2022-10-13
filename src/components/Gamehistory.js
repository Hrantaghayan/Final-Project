import React from "react";
import "./Gamehistory.css";
import { useAuth } from "../context";
import { useState, useEffect } from "react";
import {
    doc,
    getDoc,
  } from "firebase/firestore";
import { db } from "./firebaseconfig";
import { useNavigate } from "react-router-dom";

export default function Gamehistory(){
    const[gamehistory,setgamehistory] = useState('')
    const {user,logout} = useAuth();
    const [username,setusername]=useState('');  
    const [balance,setbalance]=useState('')
   const navigate = useNavigate()
    let table
    useEffect(()=>{
        debugger
        const docref =  doc(db,"userinformation",user.uid)
        getDoc(docref)
        .then((data)=>{
        setusername(data.data().username)
        setbalance(data.data().balance)
        setgamehistory(data.data().gameHistory)
        })  
       },[user])
  
    // let arr = []
       
   if(Array.isArray(gamehistory)){
  table = gamehistory.map((el)=>{
        return (
           
     <table key={Math.random()}>
                <thead  key={Math.random()}>
                    <tr key={Math.random()}>
                        <th colSpan={2} className="table-title"  key={Math.random()}>Gamehistory</th>
                    </tr>
                </thead>
           <tbody  key={Math.random()}>
           <tr  key={Math.random()}>
                <td  key={Math.random()}>AfterBalance</td>
                <td  key={Math.random()}>{el.AfterBalance}</td>
            </tr>
            <tr  key={Math.random()}>
                <td  key={Math.random()}>Bet</td>
                <td  key={Math.random()}>{el.Bet}</td>
            </tr>
            <tr  key={Math.random()}>
                <td  key={Math.random()}>date</td>
                <td  key={Math.random()}>{el.Date}</td>
            </tr>
            <tr  key={Math.random()}>
                <td  key={Math.random()}>Game</td>
                <td  key={Math.random()}>{el.Game}</td>
            </tr>
            <tr  key={Math.random()}>
                <td  key={Math.random()}>Win</td>
                <td  key={Math.random()}>{el.Win}</td>
            </tr>
           </tbody>
            </table>
            
        )
      })
   }
    return (
      <div className="table-container">
      
       {typeof gamehistory==='string'?<div className="loader-wrapper"><div className="loader"></div></div>:gamehistory.length===0?<div className="empty">You dont have game history for that you need to play our games <button className="go-casino" onClick={()=>{navigate("/casino")}}>Go casino</button></div>:
         <>
         <div className="game-history-info-wrapper">
         <div className="username-balance-wrapper">
          <p className="username-gamehistory">{username}</p>
          <p className="username-gamehistory">Balance : {balance} ֏</p>
         </div>
         <div className="game-hisory-btn-wrapper">
          <button className="g-btn" onClick={()=>{
            navigate("/Casino")
          }}>go Casino</button>
          <button className="g-btn"  onClick={()=>{
            logout()
          }}>Log out</button>
         </div>
      </div>
       {table}
         </>}
      </div>
    )
}