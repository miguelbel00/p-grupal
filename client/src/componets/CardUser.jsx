import { getUser } from '../redux/actions/actionsPetitions'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import style from '../styles/carduser.module.css';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; 
import { GiSmartphone } from 'react-icons/gi'; 
const jwt = require('jsonwebtoken');


function CardUser({userId}){
    const dispatch = useDispatch();
    const userJWT = useSelector(state => state.petitionsReducer.user);
    const user = useSelector(state => state.petitionsReducer.userOne);
    const history = useHistory()

    useEffect(() => {
        dispatch(getUser(userId))
    }, []);


    if(userJWT){
        try {
            
            const decoded = jwt.verify(userJWT, 'thisissalt');
            if (decoded.isAdmin === true) {
                dispatch(getUser(userId))
            }
           
        } catch (error) {
            console.log(error)
        }
    }   

    return (
        <div className={style.container}>
            { user 
                ?<div className='card'>
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
                </div>
                : history.push('/login') 
            }
        </div>
    )
};


export default CardUser;