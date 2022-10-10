import React from "react";
import "./casino.css";
import { useAuth } from "../context";
import { useState, useEffect } from "react";
import {
    doc,
    getDoc,
  } from "firebase/firestore";
  import { db } from "./firebaseconfig";
export default function CasinoGame(){
    let {user,logout} = useAuth()
    const [username,setusername]=useState('')   
    useEffect(()=>{
        const docref =  doc(db,"userinformation",user.uid)
        getDoc(docref)
        .then((data)=>{
           console.log(data.data())
           setusername(data.data().username)
        },[])  
       },[user])
    return (
        <>
        <div className="casino">
          <div className="for-title">
            <p>welcome {username}</p>
            <h1>Casino</h1>
            <div className="btn-wrapper">
            <button className="btn"> Game History</button>
            <button className="btn" onClick={()=>{
                logout()
            }}>Log out</button>
            </div>
          </div>
          <div className="game-container">
            <div className="first-game-container">
              <div className="first-game"></div>
              <div className="play-game-wrapper"><button className="play-game">Play JuicyFruits</button></div>
            </div>
            <div className="second-game-container">
                <div className="second-game"></div>
                <div className="play-game-wrapper"><button className="play-game2">Play Funk Master</button></div>
            </div>
            <div className="thirth-game-container">
                <div className="thirth-game"></div>
                <div className="play-game-wrapper"><button className="play-game3">Play YumYum</button></div>
            </div>
          </div>
        </div>
        </>
    )
}