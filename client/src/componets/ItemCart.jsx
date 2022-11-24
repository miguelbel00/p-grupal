import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/itemCard.css'
import { removeOneProduct } from '../redux/actions/actionShoppingCart'
import Swal from 'sweetalert2'

export default function ItemCart({ id, name, price, image, setTotal }) {

    const totalCart = useSelector((state) => state.shoppingReducer.totalCart)
    const allProducts = useSelector((state) => state.shoppingReducer.productCart);
    const [cont, setCont] = useState(1)
    const dispatch = useDispatch()

    const successAlert =() => {
        Swal.fire({
            title:'Product removed!',
            confirmButtonText:"Ok",
            timer:3000,
           icon:"success"
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
            if (parseInt( product) === id) {
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
        <div className='shopping' >
            <div className='contenedor-cart'>
                <img className="card-img-top-cart" src={image} alt={name} />
                <div className='informacion-cart'>
                    <h2 className='name-cart'>{name}</h2>
                    <h2 className='name-cart'>${price} x {cont} = ${price * cont}</h2>
                </div>
                <div className='d-grid gap-2 d-md-flex justify-content-md-center '>
                    <button className='btn btn-primary btn-sm ' onClick={handleClickRest} > - </button>
                    <br />
                    <h3 className='name-cart'>Cantidad: {cont}</h3>
                    <br />
                    <button className='btn btn-primary btn-sm ' onClick={handleClickPlus} > + </button>
                </div>
                <div className='d-flex justify-content-center '>
                    <button className='btn btn-primary' id={id} onClick={deleteFromCart}>Clear Item</button>
                </div>
            </div>
        </div>
    )
}