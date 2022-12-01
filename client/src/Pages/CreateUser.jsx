import '../styles/createproduct.css';
import { useState } from 'react';
import { postProduct } from '../redux/actions/actionsPetitions';
import { getAllProducts } from '../redux/actions/actionsFilter';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUserAdmin } from '../redux/actions/actionsAdmin';
import Swal from 'sweetalert2'
import dino from '../assets/dino.png'



const CreateUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    avatar: "",
    isAdmin: ""
  });
  console.log(user)
  const errorAlert = (message) => {
    Swal.fire({
      title: 'Error!',
      text: `${message}`,
      confirmButtonText: 'Try Again',
      background: '#fff',
      icon: 'error',
      customClass: {
        popup: 'popup-alert',
        text: 'titleAlert',
        content: 'titleAlert'
      },
    });
  }
  const successAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: `User Created `,
      confirmButtonText: 'Lets Go',
      background: '#fff',
      customClass: {
        popup: 'popup-alert',
        text: 'titleAlert',
        content: 'titleAlert'
      },
      imageUrl: dino,
      imageWidth: '200px',
      imageHeight: '200px'
    });
  }
  const [errors, setErrors] = useState({});

  const validate = (user) => {
    let error = {};

    if (user.fullName.length === 0) {
      error.fullName = 'Introduce un name valido.'
    }
    if (user.email.length === 0) {
      error.email = 'Introduce un Email valido.'
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(user.email)) {
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
    if (!user.isAdmin) {
      error.isAdmin = "Introduzca el Rol del User"
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
      !user.phone) {
      errorAlert('Please fill the inputs');
      setErrors(validate({
        ...user
      }))
    } else {
      await dispatch(registerUserAdmin(user));
      console.log(user)
      await dispatch((getAllProducts()))
      successAlert()
      history.push('/admin');
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log()
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
            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='avatar' value={user.avatar} placeholder='avatar' />
            <p className='errors'><strong>{errors.avatar}</strong></p>
          </div>
          <div >
            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='fullName' placeholder='FullName' value={user.fullName} />
            <p className='errors'><strong>{errors.fullName}</strong></p>
          </div>

          <div className='inputsError'>
            <input onChange={(e) => handleChange(e)} value={user.name} type="text" className="form-control" name='email' placeholder='Email' />
            <p className='errors'><strong>{errors.email}</strong></p>
          </div>
          <div>
            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='password' value={user.password} placeholder='Password' />
            <p className='errors'><strong>{errors.password}</strong></p>
          </div>
          <div>
            <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='phone' value={user.phone} placeholder='Phone' />
            <p className='errors'><strong>{errors.description}</strong></p>
          </div>
          <div>
            <select class="form-select form-select-lg" aria-label=".form-select-lg example" name='isAdmin' value={user.isAdmin} onChange={(e) => handleChange(e)}>
              <option value='false'>Username</option>
              <option value='true'>admin</option>
            </select>
            <p className='errors'><strong>{errors.isAdmin}</strong></p>
          </div>
          <div className='btn'>
            <button className="btn btn-primary" type="submit">Crear</button>
          </div>
        </div>
      </form>
    </div>

  )
};

export default CreateUser;