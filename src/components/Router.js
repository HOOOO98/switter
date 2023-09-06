import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from './Navigation';
import Profile from '../routes/Profile';

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {isLoggedIn && <Navigation userObj={userObj} />}
        <div
          style={{
            maxWidth: 890,
            width: "100%",
            margin: "0 auto",
            marginTop: 80,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Routes>
            {isLoggedIn ? (
              <>
                <Route exact={true} path="/" element={<Home userObj={userObj} />} />
                <Route exact={true} path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser} />} />
              </>

            ) : (
              <>
                <Route exact={true} path="/" element={<Auth />} />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
};

export default AppRouter;