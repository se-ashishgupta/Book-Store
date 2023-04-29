import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../redux/Actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loginuser(email, password));
  };

  if (isAuthenticated) return <Navigate to={"/"} />;
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <div>
            <button disabled={loading} type="submit">
              Login
            </button>
            <h4>Or</h4>
            <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
