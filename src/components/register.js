import React from "react";
import { Signup } from "./signup"
import {Login} from "./Login"
import { Routes, Route} from 'react-router-dom';
import { AuthProvider } from "../context";
import { FalsePath } from "./falsepath";
import PrivateRoute from "./privateroute";
import { Hero } from "./hero";

export  function Register(){
    return (
        <AuthProvider>
            <Routes>
           <Route
            path="/"
            element={
                     <PrivateRoute>
                         <Hero/>
                      </PrivateRoute>
                    }/>
                <Route path="Login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route  path="*" element={<FalsePath/>}/>
            </Routes>
        </AuthProvider>
    )
}