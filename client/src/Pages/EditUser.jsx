import styles from '../styles/editprofile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import {updateUser} from '../redux/actions/actionsPetitions';
import {  useHistory, useParams } from 'react-router-dom';
import {getOneUser,clearOneUser} from '../redux/actions/actionsAdmin';
import Swal from 'sweetalert2'

function EditUser () {
    const dispatch = useDispatch();
    const userState = useSelector((state)=> state.reducerAdmin.user)
        const { userId } = useParams()
        const history = useHistory()
        useEffect(() => {
        
            dispatch(getOneUser(userId))
            return ()=> {
                dispatch(clearOneUser())
            }
        }, []);
    
        const successAlert =() => {
            Swal.fire({
                title:'Success!',
                text:`User Edited `,
                confirmButtonText:'Lets Go',
                background:'#67e9ff',
                customClass:{ 
                    popup:'popup-alert',
                    text:'titleAlert',
                    content:'titleAlert'
                },
               imageUrl: 'ss',
               imageWidth:'200px',
               imageHeight:'200px'
            });
        }


    const [editUser, setEditUser] = useState({
        userId: userState ? userState.id : null,
        fullName: userState ? userState.fullName : "", 
        password:"", 
        phone: "",
        email: userState ? userState.email : null,
        isAdmin: userState ? userState.isAdmin : false
    });

    const [errors, setErrors] = useState({});
    const validate = (input) => {
        let error = {};

        if (!input.email) {
            error.email = 'Introduce el email'
        }

        if (!input.fullName) {
            error.fullName = 'Introduce el nombre'
        }

        if (!input.password) {
            error.password = 'Introduce la contrasena'
        }

        if (!input.phone) {
            error.phone = 'Introduce el numero'
        }

        if (!input.isAdmin) {
            error.isAdmin = 'Introduce el Admin'
        }

        return error
    }

    const handelSubmit = (e) => {
        e.preventDefault();
      
        if (!editUser.userId ||
            !editUser.fullName ||
            !editUser.password ||
            !editUser.phone ||
            !editUser.email ||
            !editUser.isAdmin
            ) {
            alert('Llene los campos correctamente')
           setErrors(validate({
            ...editUser
          }))
        } else {   
        dispatch(updateUser(editUser));
        successAlert()
        history.push('/admin')
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
    <div className={styles.profileContainer}>
            <h4>Edit User</h4>
            <form onSubmit={handelSubmit} className={styles.form}>         
    <div className={styles.containerName}>
               <label>Full name</label>
               <input onChange={handleChange}
                type="text" 
                className={styles.input} 
                placeholder={`${userState.fullName}`} 
                 name='fullName' 
                 value={editUser?.fullName}/>
                 <label className={styles.error}>{errors.fullName}</label>
     </div>
            <div className={styles.containerEmail}>
               <label>Email</label>
               <input
                  type="text"
                   className={styles.inputEmail} 
                   placeholder='name@example.com  ' 
                   name='email' 
                   value={userState?.email} />
            </div>
            <div className={styles.containerPhone}>
               <label>Phone</label>
                <input 
                onChange={handleChange} 
                type="text" 
                className={styles.input} 
                placeholder={`${userState.phone}`}
                name='phone' 
                value={editUser?.phone}/>
                <label className={styles.error}>{errors.phone}</label>
            </div>
            <div className={styles.containerName}>
               <label>Admin</label>
               <input onChange={handleChange}
                type="text" 
                className={styles.input} 
                placeholder={`${userState.isAdmin}`}
                 name='isAdmin' 
                 value={editUser?.isAdmin}/>
                 <label className={styles.error}>{errors.isAdmin}</label>
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
                type="text"  
                className={styles.inputId}  
                name='userId' 
                value= {userState?.id}/>
            </div>
            
            <button className={styles.btn} type='submit'>Update</button>
         </form>    


     </div>
</div>
    )
};


export default EditUser;