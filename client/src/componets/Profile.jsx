import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../redux/actions/actionsPetitions";
import Styles from "../styles/profile.module.css";
import CardUser from "./CardUser";
const jwt = require('jsonwebtoken');

export default function Profile() {
  const dispatch = useDispatch()
  const user = useSelector( (state) =>  state.petitionsReducer.userOne);
  const userJWT = useSelector(state => state.petitionsReducer.user);
 

  if(userJWT){
      try {
          const decoded = jwt.verify(userJWT?.body?.token ? userJWT.body.token :userJWT, process.env.REACT_APP_JWT_SECRETO);
          dispatch(getUser(decoded?.id ?decoded.id :decoded.user.id  ))
      } catch (error) {}
  }

  return (
    <>{ 
      user && 

      <div className={Styles.container}>

        <CardUser user={user } />
        <Link to={"/"}>
          <button>Edit Profile</button>
        </Link>

      </div>


  
      
      }
    </>
  );
}
