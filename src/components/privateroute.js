import React from "react";
import { useAuth } from "../context";
import { Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// export default function PrivateRoute({ children }) {
//   debugger
//     console.log('private route called')
//     const { user } = useAuth()
    
// return(
//     <Route
//     render={() => {
//       return user ?  children: <Navigate to="/login" />
//     }}
//   ></Route>
// )
//   }
export default  function PrivateRoute({ children }) {
  
  let auth = useAuth();
  let location = useLocation();
  console.log('privateroute called')
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}