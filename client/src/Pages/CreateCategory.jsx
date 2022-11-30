 import '../styles/createCategory.css';
 import { useState } from 'react';
 import { getAllProducts } from '../redux/actions/actionsFilter';
 import {useDispatch} from "react-redux"
 import { useHistory } from 'react-router-dom';
 import Swal from 'sweetalert2'
import { createCategory } from '../redux/actions/actionsAdmin';
import dino from '../assets/dino.png'


export default function CreateCategory() {

    const dispatch = useDispatch();
    const history = useHistory();
     const [category, setCategory] = useState({
       name:""
     });
     
     const [errors, setErrors] = useState({});

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
            text:`Category Created `,
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

const validate = (category) => {
  let error = {};

  if (category.name.length === 0) {
    error.name = 'Input a name'
  }
 
  return error;

}
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
          !category.name 
           ) {
            errorAlert('Please fill the inputs');
          setErrors(validate({
            ...category
          }))
        }else {
        await dispatch(createCategory(category));
        await dispatch((getAllProducts()))
        successAlert() 
        history.push('/admin');
        }      
    };

    const handleChange = (e) => {
        e.preventDefault();
        setCategory((prev) => ({...prev, [e.target.name]: e.target.value}));
        setErrors(validate({
          ...category,
          [e.target.name]: [e.target.value]
        }))
    };

    
return (
  <div className='createContainer'> 
    <form onSubmit={(e) => handleSubmit(e)} className="needs-validation"> 
    <div className='boxInput'>
      <h4 ><strong>Create Category</strong></h4>
            <div className='inputsError'>
                <input  onChange={(e) => handleChange(e)} value= {category.name}  type="text" className="form-control" name='name' placeholder="Categories name" />  
                <p className='errors'><strong>{errors.name}</strong></p> 
            </div>
            <div className='btn'>
                <button  className="btn btn-primary" type="submit">New Category</button>
            </div>
        </div>
    </form>
</div>

    )
 };
