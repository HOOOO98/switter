import React from "react";
import { authService } from "../fBase";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut()
    navigate("/");
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default LogOutButton;