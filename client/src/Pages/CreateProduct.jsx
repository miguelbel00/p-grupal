 import '../styles/createproduct.css';
 import { useEffect, useState } from 'react';
 import { postProduct } from '../redux/actions/actionsPetitions';
 import { getAllProducts } from '../redux/actions/actionsFilter';
 import { useDispatch, useSelector } from 'react-redux';
 import { useHistory } from 'react-router-dom';
import { getCategory } from '../redux/actions/actionsAdmin';
import Swal from 'sweetalert2'
import dino from '../assets/dino.jpg'



 const CreateProduct = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const categoriesState = useSelector(state => state.reducerAdmin.categories)

    const [product, setProduct] = useState({
      name:"", 
      description:"", 
      image: [], 
      price: "", 
      stock: "",
       categories:[]
    });
    
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getCategory())
      
    }, []);
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
          text:`Product Created successfully `,
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

const validate = (product) => {
  let error = {};

  if (product.name.length === 0) {
    error.name = 'Introduce un título válido.'
  }
  if (product.price.length === 0) {
    error.price = 'Introduce el precio del artículo.'
  }
  if (product.image.length === 0) {
    error.image = 'Introduce la URL de la imagen.'
  }
  if (!product.image) {
    error.image = 'No funciona la URL'
  }

  if (!product.stock) {
    error.stock = 'Introduce el stock del artículo.'
  }
  if (!product.description) {
    error.description = 'Introduce la descripcion del artículo.'
  }
 
  return error;

}
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
          !product.name || 
          !product.image || 
          !product.price || 
          !product.description || 
          !product.stock ||
          !product.categories ) {
          errorAlert('Please fill the inputs');
          setErrors(validate({
            ...product
          }))
        }else {
        await dispatch(postProduct(product));
        await dispatch((getAllProducts()))
        successAlert()
        history.push('/admin');
        }      
    };

    const handleChange = (e) => {
        e.preventDefault();
        setProduct((prev) => ({...prev, [e.target.name]: e.target.value}));
        setErrors(validate({
          ...product,
          [e.target.name]: [e.target.value]
        }))
    };

    const handleCategory =  (e) => {
      e.preventDefault();
        setProduct({
          ...product,
          categories: [ ...product.categories, e.target.value]
 
      })
    };

    const handleImage = (e) => {
      e.preventDefault();
      setProduct({
        ...product,
        image: [ ...product.image, e.target.value],
       
      })  
  
    };


    const handleDelete = (e) => {
      setProduct({
        ...product,
        categories: product.categories.filter(category => category  !== e)
      })
    };

    const imageDelete = (e) => {
      setProduct({
        ...product,
        image: product.image.filter(img => img !== e)
      })
    };


    const listCategory = categoriesState.map(c => c.name)

 
 

    
return (
  <div className='createContainer'> 
<form onSubmit={(e) => handleSubmit(e)} className="needs-validation"> 
<div className='boxInput'> 
    <h4 ><strong>Artículo en venta</strong></h4>
    {product.image && product.image.map((image) => (
      <div className='myProduct'>
        <img  src={image} alt=""/> 
        <button onClick={() => imageDelete(image)}>x</button>
      </div>
    ))}
     <div >
      <input onChange={(e) => handleImage(e)}  type="text" className="form-control"  name='image' placeholder='Imagen Url..' value={product.image} />   
      <p className='errors'><strong>{errors.image}</strong></p>
    </div>
    <div className='inputsError'>
      <input  onChange={(e) => handleChange(e)} value= {product.name}  type="text" className="form-control" name='name' placeholder='Titulo' />  
      <p className='errors'><strong>{errors.name}</strong></p> 
    </div>
    <div>
      <input  onChange={(e) => handleChange(e)} type="number" className="form-control" name='price' value={product.price} placeholder= 'Precio' />
      <p className='errors'><strong>{errors.price}</strong></p> 
    </div>
    <div >
      <input  onChange={(e) => handleChange(e)} type="number" className="form-control" name='stock' value={product.stock}  placeholder= 'Stock' />
      <p className='errors'><strong>{errors.stock}</strong></p>
    </div>
    <div>
      <input  onChange={(e) => handleChange(e)} type="text" className="form-control" name='description' value={product.description} placeholder='Descripcion'  />
      <p className='errors'><strong>{errors.description}</strong></p>
    </div>
    <div >

      <select className="form-control" onChange = {handleCategory}  value = {product.categories}>
        <option value="">Elija su categoria...</option>
        {listCategory.map && listCategory?.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}      
      </select >
      {product.categories && product.categories?.map(delet => (
        <div className='category'>
          <p>{delet}</p>
          <button onClick={() => handleDelete(delet)} key={delet} value={delet}>X</button>
        </div>
      ))}
    </div>
    <div className='btn'>
  <button  className="btn btn-primary" type="submit">Publicar</button>
  </div>
  </div>
  <div className='product'>
   {product.image && product.image.map((img) => (
      <div className='showImg' >
        <img  src={img} alt=""/> 
      </div>
    ))}
    <div className='showProduct'>
   <h2 >{product.name}</h2> 
  <label >Stock:{product.stock}</label>
  <br/> 
  <label >Price: ${product.price}</label>
  <br/> 
  <label >Description: {product.description}</label>
  </div>
   </div>
</form>
</div>

    )
 };

 export default CreateProduct;