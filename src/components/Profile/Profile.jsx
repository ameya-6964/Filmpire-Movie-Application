import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const profile = useParams();
  return (
    <div>
      <h1>Profile {profile.id}</h1>
    </div>
  );
};

export default Profile;
