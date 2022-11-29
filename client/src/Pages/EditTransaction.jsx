import styles from '../styles/editprofile.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {getTransactions, updateTransaction} from '../redux/actions/actionsAdmin';

function EditTrasnsaction () {

    const transactions = useSelector((state)=> state.reducerAdmin.transactions)
    const dispatch = useDispatch()
    const history = useHistory()
    const { transactionId } = useParams()
    const [editTransc, setEditTransc] = useState({
        status: transactions ? transactions.status : ''
    })

    useEffect(() => {
        
        dispatch(getTransactions(transactionId))
    }, []);


    const [errors, setErrors] = useState({});
    const validate = (input) => {
        let errors = {};

        if (!input.status) {
            errors.status = 'introduce el estado'
        }
    }


    const handelSubmit = (e) => {
        e.preventDefault();
      
        if (!editTransc.status) {
            alert('Llene los campos correctamente')
           setErrors(validate({
            ...editTransc
          }))
        } else {   
        dispatch(updateTransaction({status:editTransc.status,transactionId}));
        alert('Transaccion actualizada');
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
                       <input onChange={handleChange}
                        type="text" 
                        className={styles.input} 
                        placeholder='Completed or Canceled'
                         name='status' 
                         value={editTransc?.status}/>
                         <label className={styles.error}>{errors?.status}</label>
                         </div>
                <button className={styles.btn} type='submit'>Update</button>
            </form>
        
        </div>
    </div>
        )
}

export default EditTrasnsaction;