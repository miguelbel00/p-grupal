import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../styles/itemCard.module.css'
import basura from "../assets/basura.png"
import { removeOneProduct } from '../redux/actions/actionShoppingCart'
import Swal from 'sweetalert2'

export default function ItemCart({ id, name, price, image, setTotal }) {

    const totalCart = useSelector((state) => state.shoppingReducer.totalCart)
    const allProducts = useSelector((state) => state.shoppingReducer.productCart);
    const [cont, setCont] = useState(1)
    const dispatch = useDispatch()

    const successAlert = () => {
        Swal.fire({
            title: 'Product removed!',
            confirmButtonText: "Ok",
            timer: 3000,
            icon: "success"
        });
    }

    const addPriceAndContLocal = () => {
        ///se rellena el cart pero este se rellena tambien con nulls(no sabes por que) 
        if (id !== null && id !== undefined && price !== null && price !== undefined && cont !== null && cont !== undefined) {
            totalCart[id] = [price, cont]
        }
        //se crea un nuevo cart que va a guardar unicamente los productos sin los nulls
        let nuevoCart = {}
        //este for evalua si existe un null en caso contrario rellenara el nuevo cart con el producto
        //dejando asi el nuevo cart unicamente con los producto rellenador previamente y sin los nulls
        for (const key in totalCart) {
            if (totalCart[key] !== null) {
                nuevoCart[key] = totalCart[key]
            }
        }
        saveTotalCart(nuevoCart)
    }

    const deleteProduct = () => {
        delete totalCart[id]
        let nuevoCart = {}
        for (const key in totalCart) {
            if (totalCart[key] !== null) {
                nuevoCart[key] = totalCart[key]
            }
        }
        return nuevoCart
    }

    const handleClickPlus = () => {
        setCont(cont + 1);
    }
    const handleClickRest = () => {
        setCont(cont - 1);
    }

    const saveTotalCart = (nuevoCarrito) => {
        localStorage.setItem('totalCart', JSON.stringify(nuevoCarrito))
    }

    const removeOneCart = () => {
        localStorage.setItem("carrito", JSON.stringify(allProducts.filter(e => e.id !== id)))
        localStorage.setItem('totalCart', JSON.stringify(deleteProduct()))
    }

    const deleteFromCart = (e) => {
        dispatch(removeOneProduct(e.target.id))
        removeOneCart()
        successAlert()
    }


    useEffect(() => {
        //Recorre el carrito
        for (const product in totalCart) {
            //se evalua si el producto del carrito es igual al ID correspondiente
            if (parseInt(product) === id) {
                //se obtiene el precio y el cantidad que el usuario quiere con el producto ID
                const priceCont = Object.values(totalCart[product])
                // setea la cantidad del producto segun este en el carrito guardado 
                setCont(priceCont[priceCont.length - 1])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        addPriceAndContLocal()
        setTotal()
        // eslint-disable-next-line react-hooks/exhaustive-deps        
    }, [cont, totalCart])



    return (
        <div className={Styles.container} >
            <div className={Styles.containerOne}>
                <div className={Styles.img}><img src={image} alt="Not found" /></div>
                <div className={Styles.name}><h3>{name}</h3></div>
            </div>

            <div className={Styles.containerTwo}>
                <div className={Styles.amount}>
                    <button className={Styles.btn1} onClick={handleClickRest} > - </button>
                    <h3>{cont}</h3>
                    <button className={Styles.btn2} onClick={handleClickPlus} > + </button>
                </div>
            </div>

            <div className={Styles.containerThree}><h3>${price * cont}</h3></div>
            <div className={Styles.containerFour}><img id={id} onClick={deleteFromCart} src={basura} alt={"eliminar"} /></div>
        </div>
    )
}