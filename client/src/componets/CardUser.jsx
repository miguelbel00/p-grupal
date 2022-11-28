import React from 'react';
import style from '../styles/carduser.module.css';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; 
import { GiSmartphone } from 'react-icons/gi'; 
import { useSelector } from 'react-redux';


function CardUser({user}){
    const userJWT = useSelector(state => state.petitionsReducer.user);
   
    console.log(userJWT)
return (
   
           <div className={style.container}>
              { user && <div className='card'>
                        <div className={style.containerImg}>
                            {user.avatar 
                            ?<img src={user.avatar} alt="avatar_user"/>
                            :<h1><FaUser className={style.img}/></h1>}      
                        </div>
                        <div className={style.name}>
                            <h6>{user.fullName}</h6>
                        </div>
                        <div className={style.boxDetail}>
                            <label className={style.contact}>Contact</label>   
                            <div className={style.boxEmail}>
                                <p><AiOutlineMail/></p>
                                <p>{user.email}</p>
                            </div>
                            <div className={style.boxPhone}>
                                <p><GiSmartphone/></p>
                                <p>{user.phone}</p>
                            </div>
                            {/* <div className={style.address}>
                                <p><GiSmartphone/></p>
                                <p>{user.address}</p>
                            </div>*/}
                        </div>
                </div>}
            </div>
)};


export default CardUser;