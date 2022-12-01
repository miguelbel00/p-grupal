import styles from '../styles/editprofile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {updateUser} from '../redux/actions/actionsPetitions';
import CardUser from './CardUser';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import dino from '../assets/dino.png'



function EditProfile () {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.petitionsReducer.userOne);
    const [editUser, setEditUser] = useState({
        userId: user ? user.id : null,
        fullName: "", 
        password:"", 
        phone: "",
        email: user ? user.email : null,
    });


    const errorAlert = (message) => {
        Swal.fire({
            title:'Error!',
            text:`${message}`,
            confirmButtonText:'Try Again',
            background:'#67e9ff',
            icon:'error',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
        }); 
    }
    const successAlert =() => {
        Swal.fire({
            title:'Success!',
            text:`Profile Edited `,
            confirmButtonText:'Lets Go',
            background:'#67e9ff',
            customClass:{ 
                popup:'popup-alert',
                text:'titleAlert',
                content:'titleAlert'
            },
           imageUrl: dino,
           imageWidth:'200px',
           imageHeight:'200px'
        });
    }

    const [errors, setErrors] = useState({});
    const validate = (input) => {
        let error = {};

        if (!input.fullName) {
            error.fullName = 'Enter name'
        }

        if (!input.phone) {
            error.phone = 'Enter number'
        }

        if (isNaN(input.phone)) {
            error.phone = 'Enter only numbers'
        }
        return error
    }

    const handelSubmit = (e) => {
        e.preventDefault();
      editUser.userId = user.id
      editUser.email = user.email
      editUser.isAdmin = user.isAdmin
        if (!editUser.userId ||
            !editUser.fullName ||
            !editUser.password ||
            !editUser.phone ||
            !editUser.email ) {
            errorAlert('Please fill the inputs')
           setErrors(validate({
            ...editUser
          }))
        } else {   
        dispatch(updateUser(editUser));
            successAlert()
        }  
    };

    const handleChange = (e) => {
        e.preventDefault();
        setEditUser({
            ...editUser,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...editUser,
            [e.target.name]: e.target.value
        }))
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
                 value={editUser?.fullName}/>
                 <label className={styles.error}>{errors.fullName}</label>
     </div>
            <div className={styles.containerEmail}>
               <label>Email</label>
               <input
                 onChange={handleChange}
                  type="text"
                   className={styles.inputEmail} 
                   placeholder='name@example.com  ' 
                   name='email' 
                   value={user?.email} />
            </div>
            <div className={styles.containerPhone}>
               <label>Phone</label>
                <input 
                onChange={handleChange} 
                type="text" 
                className={styles.input} 
                placeholder='ej:+54 1163259874 ' 
                name='phone' 
                value={editUser?.phone}/>
                <label className={styles.error}>{errors.phone}</label>
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
                value= {user?.id}/>
            </div>
            <button className={styles.btn} type='submit'>Update</button>
         </form>    
         <Link  to='/'>     
         <button className={styles.btnCancel}>Cancel</button>
        </Link>

     </div>
</div>
    )
};


export default EditProfile;