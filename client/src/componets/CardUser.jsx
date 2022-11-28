import React from 'react';
import Styles from '../styles/carduser.module.css';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; 
import { GiSmartphone } from 'react-icons/gi'; 


function CardUser({user}){


return (
   
           <div className={Styles.container}>
                <div className='card'>
                        <div className={Styles.containerImg}>
                            {user.avatar 
                            ?<img src={user.avatar} alt="avatar_user"/>
                            :<h1><FaUser className={Styles.img}/></h1>}      
                        </div>
                        <div className={Styles.name}>
                            <h6>{user.fullName}</h6>
                        </div>
                        <div className={Styles.boxDetail}>
                            <label className={Styles.contact}>Contact</label>   
                            <div className={Styles.boxEmail}>
                                <p><AiOutlineMail/></p>
                                <p>{user.email}</p>
                            </div>
                            <div className={Styles.boxPhone}>
                                <p><GiSmartphone/></p>
                                <p>{user.phone}</p>
                            </div>
                            {/* <div className={Styles.address}>
                                <p><GiSmartphone/></p>
                                <p>{user.address}</p>
                            </div>*/}
                        </div>
                </div>
            </div>
)};


export default CardUser;