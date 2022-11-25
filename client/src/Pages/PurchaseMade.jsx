import { Link } from 'react-router-dom';
import styles from '../styles/purchasemade.module.css';


function PurchaseMade() {
    return (
        <div className={styles.purchaContainer}>
          <div className={styles.boxContainer}>
           <h4 className={styles.msg} >Muchas gracias por su compra!</h4>
           <div className={styles.buttonContainer}>
           <Link className={styles.btn} to='/'> 
             <button type="button" class="btn btn-outline-primary">
               Inicio
              </button>
           </Link>
           <Link className={styles.btn} to='/products'> 
             <button type="button" class="btn btn-outline-primary">
               Volver a comprar
              </button>
           </Link>
           </div>
           </div>
        </div>
    )
}


export default PurchaseMade;