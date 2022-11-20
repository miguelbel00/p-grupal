import React,{useEffect}from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Styles from "../styles/profile.module.css";
import CardUser from "./CardUser";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const user = useSelector((state) => state.petitionsReducer.userOne);

  return (
        <div className={Styles.container}>
                <CardUser user={user ? user : null} />
                <Link to={"/"}>
                  <button>Edit Profile</button>
                </Link>
            </div>
  );
}
