import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import './Navbar.css';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="auth-buttons">
        {isAuth ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={() => { dispatch(logout()) }}>Logout</button>
          </>
        ) : (
          <div className="auth-container">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
