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
  // debugger
  let auth = useAuth();
  let location = useLocation();
  console.log('privateroute called')
  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}