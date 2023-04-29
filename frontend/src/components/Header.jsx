import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/Actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <nav>
      <h2>Book Store</h2>

      <article>
        {isAuthenticated ? (
          <>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link disabled={loading} onClick={logoutHandler} className="btn">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Sign Up</Link>
          </>
        )}
      </article>
    </nav>
  );
};

export default Header;
