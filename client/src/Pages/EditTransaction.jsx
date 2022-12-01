import styles from '../styles/editprofile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {getTransactions, updateTransaction} from '../redux/actions/actionsAdmin';
import Swal from 'sweetalert2'
import dino from '../assets/dino.png'

function EditTrasnsaction () {

    const transactions = useSelector((state)=> state.reducerAdmin.transactions)
    const dispatch = useDispatch()
    const history = useHistory()
    const { transactionId } = useParams()
    const [editTransc, setEditTransc] = useState({
        status: transactions ? transactions.status : ''
    })
    const errorAlert = (message) => {
        Swal.fire({
            title:'Error!',
            text:`${message}`,
            confirmButtonText:'Try Again',
            background:'#fff',
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
            text:`Transaction Edited `,
            confirmButtonText:'Lets Go',
            background:'#fff',
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

    useEffect(() => {
        
        dispatch(getTransactions(transactionId))
    }, []);


    const [errors, setErrors] = useState({});
    const validate = (input) => {
        let errors = {};

        if (!input.status) {
            errors.status = 'Enter state'
        }
    }


    const handelSubmit = (e) => {
        e.preventDefault();
      
        if (!editTransc.status) {
            errorAlert('Please fill the inputs')
           setErrors(validate({
            ...editTransc
          }))
        } else {   
        dispatch(updateTransaction({status:editTransc.status,transactionId}));
        successAlert();
        history.push('/admin')
        }  
    };

    const handleChange = (e) => {
        e.preventDefault();
        setEditTransc({
            ...editTransc,
            [e.target.name]: e.target.value
        });

        setErrors(validate({
            ...editTransc,
            [e.target.name]: e.target.value
        }))
    };

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                    <h4>Edit</h4>
                    <form onSubmit={handelSubmit} className={styles.form}>         
            <div className={styles.containerName}>
                       <label>Status</label>
                        <select class="form-select form-select-lg" aria-label=".form-select-lg example" name='status' value={editTransc?.status} onChange={(e) => handleChange(e)}>
                            <option value='Complete'>Completed</option>
                            <option value='Cancelled'>Canceled</option>
                            <option value='Pending'>Pending</option>
                        </select>
                         <label className={styles.error}>{errors?.status}</label>
                         </div>
                <button className={styles.btn} type='submit'>Update</button>
            </form>
        
        </div>
    </div>
        )
}

export default EditTrasnsaction;