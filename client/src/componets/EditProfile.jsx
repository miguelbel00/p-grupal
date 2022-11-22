import styles from '../styles/editprofile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {updateUser} from '../redux/actions/actionsPetitions';
import CardUser from './CardUser';



function EditProfile () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.petitionsReducer.userOne);
    const [editUser, setEditUser] = useState({
        userId: user.id  ? user.id : null,
        fullName: "", 
        password:"", 
        phone: "",
        email: ""
    });

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(editUser);

        dispatch(updateUser(editUser))
        alert('creado')
        
    };

    const handleChange = (e) => {
        e.preventDefault();

        setEditUser({
            ...editUser,
            [e.target.name]: e.target.value
        });
    };
    return (
<div className={styles.container}>
    <div className={styles.cardUser}>
        <CardUser user = {user}/>
    </div> 
    <div className={styles.profileContainer}>
            <h4>Edit</h4>
            <form onSubmit={handelSubmit} className={styles.form}>         
    <div className={styles.containerName}>
               <label>Full name</label>
               <input onChange={handleChange}
                type="text" 
                className={styles.input} 
                placeholder='full name... ' 
                 name='fullName' 
                 value={editUser.fullName}/>
     </div>
            <div className={styles.containerEmail}>
               <label>Email</label>
               <input
                 onChange={handleChange}
                  type="text"
                   className={styles.input} 
                   placeholder='name@example.com  ' 
                   name='email' 
                   value={editUser.email} />
            </div>
            <div className={styles.containerPhone}>
               <label>Phone</label>
                <input 
                onChange={handleChange} 
                type="text" 
                className={styles.input} 
                placeholder='ej:+54 1163259874 ' 
                name='phone' 
                value={editUser.phone}/>
            </div>
            <div className={styles.containerPassword}>
               <label>Password</label>
                <input 
                onChange={handleChange}
                className={styles.input}  
                type="password" 
                placeholder='*********' 
                name='password' 
                value={editUser.password}/>
            </div> 
            <div className={styles.inputIdBox}>
               <input 
               onChange={handleChange}
                type="text"  
                className={styles.inputId}  
                name='userId' 
                value= {user.id}/>
            </div>
            <button className={styles.btn} type='submit'>update</button>
         </form>         
     </div>
</div>
    )
};


export default EditProfile;