import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/shoppingCart.css'
import { removeOneProduct } from '../redux/actions/actionShoppingCart'
import '../styles/shoppingCart.css'

export default function ItemCart ({id, name, price, image,setTotal,saveTotalCart}) {
    
    const totalCart = useSelector((state) => state.shoppingReducer.totalCart)
    const [cont, setCont] = useState(1)
    const dispatch = useDispatch()

    const addPriceAndContLocal = () => {
        ///se rellena el cart pero este se rellena tambien con nulls(no sabes por que) 
        if(id!==null && id!==undefined && price!==null && price!==undefined && cont!==null && cont!==undefined){
            totalCart[id] = [price,cont]
        }
        //se crea un nuevo cart que va a guardar unicamente los productos sin los nulls
        let nuevoCart = {}
        //este for evalua si existe un null en caso contrario rellenara el nuevo cart con el producto
        //dejando asi el nuevo cart unicamente con los producto rellenador previamente y sin los nulls
        for (const key in totalCart) {
            if (totalCart[key]!==null) {
                nuevoCart[key]=totalCart[key]
            }
        }
        saveTotalCart(nuevoCart)
    }

    const handleClickPlus= ()=> {
       setCont(cont + 1 );
    }
    const handleClickRest= ()=> {
       setCont(cont - 1 );
    }

    const deleteFromCart = (e) => {
        dispatch(removeOneProduct(e.target.id))
        alert('elimindo')
    }
 

    useEffect(()=>{

            for (const product in totalCart) {
                if (totalCart[product] !==null) {         
                    if (totalCart.hasOwnProperty(`${id}`)) {
                        const values = Object.values(totalCart[product] )
                        if (values[values.length-1]!==cont) {
                            setCont(values[values.length-1])
                        }                        
                }    
                }      
            }
        
    },[])

    useEffect(()=>{
        addPriceAndContLocal()
        setTotal()
    },[cont,totalCart]) 

    return(
        <div>
            <div className='cart'>
                <img className="card-img-top" src={image} alt={name} />
                <div className='card-body'>
                <h2 >{name}</h2>
             <h2>${price} x {cont} = ${price*cont}</h2>
            </div>
            <div className='d-grid gap-2 d-md-flex justify-content-md-center'>   
            <button className='btn btn-primary btn-sm' onClick={handleClickRest } > - </button>
            <br/>
            <h3>Cantidad: {cont}</h3>
            <br/>
            <button className='btn btn-primary btn-sm' onClick={handleClickPlus} > + </button>
            </div>
            <div className='d-flex justify-content-center'>
            <button className='btn btn-primary' id={id} onClick={deleteFromCart}>Clear Item</button>
            </div>
            </div>
        </div>
    )
}