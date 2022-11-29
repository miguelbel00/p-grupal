import '../styles/createproduct.css';
import { useState } from 'react';
import { postProduct } from '../redux/actions/actionsPetitions';
import { getAllProducts } from '../redux/actions/actionsFilter';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUserAdmin } from '../redux/actions/actionsAdmin';




const CreateUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
   const [user, setUser] = useState({
    fullName:"",
    email:"",
    password:"",
    phone:"",
    avatar:""
   });
   
   const [errors, setErrors] = useState({});

const validate = (user) => {
 let error = {};

 if (user.fullName.length === 0) {
   error.fullName = 'Introduce un name valido.'
 }
 if (user.email.length === 0) {
   error.email = 'Introduce un Email valido.'
 }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(user.email)) {
    error.email = 'Enter a valid Email'
}
 if (user.password.length === 0) {
   error.password = 'Introduce un password valido.'
 }
 if (!user.avatar) {
   error.avatar = 'No funciona la URL'
 }

 if (!user.phone) {
   error.phone = 'Introduce el phone del Usuario.'
 }

 return error;

}
  
   const handleSubmit = async (e) => {
       e.preventDefault();

       if (
         !user.fullName || 
         !user.email || 
         !user.password || 
         !user.avatar || 
         !user.phone ) {
         alert('Llene los campos corectamente');
         setErrors(validate({
           ...user
         }))
       }else {
       await dispatch(registerUserAdmin(user));
       await dispatch((getAllProducts()))
       alert('Usuario creado correctamente') ; 
       history.push('/admin');
       }      
   };

   const handleChange = (e) => {
       e.preventDefault();
       setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
       setErrors(validate({
         ...user,
         [e.target.name]: [e.target.value]
       }))
   };


   
return (
 <div className='createContainer'> 
<form onSubmit={(e) => handleSubmit(e)} className="needs-validation"> 
<div className='boxInput'> 
   <h4 ><strong>Create User</strong></h4>
    <div >
     <input  onChange={(e) => handleChange(e)} type="text" className="form-control" name='avatar' value={user.avatar}  placeholder= 'avatar' />
     <p className='errors'><strong>{errors.avatar}</strong></p>
   </div>
    <div >
     <input onChange={(e) => handleChange(e)}  type="text" className="form-control"  name='fullName' placeholder='FullName' value={user.fullName} />   
     <p className='errors'><strong>{errors.fullName}</strong></p>
   </div>

   <div className='inputsError'>
     <input  onChange={(e) => handleChange(e)} value= {user.name}  type="text" className="form-control" name='email' placeholder='Email' />  
     <p className='errors'><strong>{errors.email}</strong></p> 
   </div>
   <div>
     <input  onChange={(e) => handleChange(e)} type="text" className="form-control" name='password' value={user.password} placeholder= 'Password' />
     <p className='errors'><strong>{errors.password}</strong></p> 
   </div>
   <div>
     <input  onChange={(e) => handleChange(e)} type="text" className="form-control" name='phone' value={user.phone} placeholder='Phone'  />
     <p className='errors'><strong>{errors.description}</strong></p>
   </div>
   <div>
     <input  onChange={(e) => handleChange(e)} type="text" className="form-control" name='rol' value={user.rol} placeholder='Rol:"True"or"False'  />
     <p className='errors'><strong>{errors.rol}</strong></p>
   </div>
   <div className='btn'>
 <button  className="btn btn-primary" type="submit">Crear</button>
 </div>
 </div>
</form>
</div>

   )
};

export default CreateUser;