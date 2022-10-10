import React from "react";
import { Signup } from "./signup"
import {Login} from "./Login"
import { Routes, Route} from 'react-router-dom';
import { AuthProvider } from "../context";
import { FalsePath } from "./falsepath";
import PrivateRoute from "./privateroute";
import { Hero } from "./hero";
import MainProduct from "./mainProduct";
import { Privateroute2 } from "./privateroute";
import { AboutUs } from "./about-us";
import { Privateroute3 } from "./privateroute";
import CasinoGame from "./Casino-games";
export  function Register(){
    return (
        <AuthProvider>
            <Routes>
           <Route
            path="/"
            element={
                     <PrivateRoute>
                         <MainProduct/>
                      </PrivateRoute>
                    }/>
                    <Route
            path="/Aboutus"
            element={
                     <Privateroute2>
                         <AboutUs/>
                      </Privateroute2>
                    }/>
                    <Route
            path="/Casino"
            element={
                     <Privateroute2>
                         <CasinoGame/>
                      </Privateroute2>
                    }/>
                <Route path="Login" element={<Login/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route  path="*" element={<FalsePath/>}/>
            </Routes>
        </AuthProvider>
    )
}