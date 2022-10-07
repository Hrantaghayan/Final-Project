import React from 'react';
import './signup.css';
import { Link } from "react-router-dom";
import { useState} from "react";
import {
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from './firebaseconfig'
import { useAuth } from '../context';
import { Navigate } from 'react-router-dom';
import { db } from './firebaseconfig';
import {
  setDoc,
  collection,
  addDoc,
  doc,}
from "firebase/firestore"
import { createUserDocument } from './firebaseconfig';
export function Signup(){
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [passwordconfirm, setconfarmationPassword] = useState('')
  const [error,setError]=useState('')
  const {user}=useAuth();
  const [loading, setLoading] = useState(false);
  const [username,setUsername] = useState('')
  const register = async (e) => {
  e.preventDefault()
  if(passwordconfirm!==registerPassword){
      return setError('Passwords do not match')
  }
  try {
    debugger
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    const ref = doc(db,"userinformation",user.user.uid)
    const newdoc=await setDoc(ref,{
        email:user.email,
        id:user.uid,
        username
    }).then((re)=>{
      debugger
      console.log('data in server')
      console.log(newdoc)
      console.log(re)
    })
    console.log(newdoc)
    setLoading(true)
  } catch (err) {
   setError(err.code)
  }
  setLoading(false)
};

const logout = async () => {
  await signOut(auth);
};
  return (
    <div>
      {user?<Navigate to="/"/>:
       <div className="auth-content">
       <div className="container">
           <div className="login-form">
               <h2>Sign up</h2>
               {error?<div className="alert">{error}</div>:<div></div>}
               <form>
               <div className="for-inputs">
                       <div><label htmlFor="username">Username</label></div>
                       <input type="text" placeholder="Username" id="username"
                       onChange={(e)=>{
                           setUsername(e.target.value)
                       }
                     }
                     onKeyDown={(e)=>{
                       if(e.keyCode===8){
                         setError('')
                       }
                     }}
                       />
                   </div>
                   <div className="for-inputs">
                       <div><label htmlFor="em">Email</label></div>
                       <input type="email" placeholder="Email" id="em"
                       onChange={(e)=>{
                        setRegisterEmail(e.target.value)
                        
                       }}
                       onKeyDown={(e)=>{
                         if(e.keyCode===8){
                           setError('')
                         }
                       }}
                       />
                   </div>
                   <div className="for-inputs">
                       <div><label htmlFor="passw">Password</label></div>
                       <input type="Password"  placeholder="Password" id="passw"
                       onChange={(e)=>{
                        setRegisterPassword(e.target.value)
                       }}
                       onKeyDown={(e)=>{
                         if(e.keyCode===8){
                           setError('')
                         }
                       }}
                       />
                   </div>
                   <div className="for-inputs">
                       <div><label htmlFor="Password-Confirmation">Password Confirmation</label></div>
                       <input type="Password" placeholder="Password" id="Password-Confirmation"
                       onChange={(e)=>{
                           setconfarmationPassword(e.target.value)
                       }
                     }
                     onKeyDown={(e)=>{
                       if(e.keyCode===8){
                         setError('')
                       }
                     }}
                       />
                   </div>
               <div className="for-btn">
                   <button className="btn" onClick={(e)=>{
                     register(e)
                   }}>Sign Up</button>
               </div>
               <div className="end">
                   <p>Already have an account?</p>
                   <p className="last-item"><Link to={'/Login'}>Login</Link></p>
               </div>
               </form>
           </div>
       </div>
      </div>
      }
    
  </div>
  )
}