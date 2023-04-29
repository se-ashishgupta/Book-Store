import React from "react";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Profile = ({ user }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return loading ? (
    <Loader />
  ) : (
    <div className="profile">
      <div>
        <div>
          <h2>Name:</h2>
          <p>{user.name}</p>
        </div>
        <div>
          <h2>Email:</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
