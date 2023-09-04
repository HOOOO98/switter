import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = ({isLoggedIn}) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route exact={true} path="/" element={<Home />} />{""}
            </>
          ) : (
            <Route exact={true} path="/" element={<Auth />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;