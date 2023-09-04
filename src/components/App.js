import React, { useState } from "react";
import AppRouter from "./Router";
import {authService} from "../fBase";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(authService.currentUser);
  setInterval(() => {
    console.log(authService.currentUser);
  }, 2000);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy;{new Date().getFullYear()} Switter</footer>
    </>
  )
}

export default App;