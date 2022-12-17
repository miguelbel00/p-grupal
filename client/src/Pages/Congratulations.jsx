import styles from '../styles/purchasemade.module.css';
import { Link } from 'react-router-dom';


function Congratulations() {
    return (
        <div className={styles.purchaContainer}>
             <div>
          <div className={styles.boxContainer}>
           <h4 className={styles.msg}>Thank you for your purchase!</h4>
           <div className={styles.buttonContainer}>
           <Link className={styles.btn} to='/'> 
           <button type="button" class="btn btn-primary btn-lg">Home</button>
           </Link>
           <Link className={styles.btn} to='/products'> 
           <button type="button" class="btn btn-primary btn-lg"> Buy More Products</button>
           </Link>
           </div>
           </div>
        </div>
       
        </div>
    )
}


export default Congratulations;