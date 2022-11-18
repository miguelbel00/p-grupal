 import '../styles/createproduct.css';
 import { useState } from 'react';
 import { postProduct } from '../redux/actions/actionsPetitions';
 import { useDispatch } from 'react-redux';
 import { useHistory } from 'react-router-dom';




 const CreateProduct = () => {
   const dispatch = useDispatch();
   const history = useHistory();
    const [product, setProduct] = useState({
      name:"", 
      description:"", 
      image: [], 
      price: "", 
      stock: "",
       categories:[]
    });
    
    const [errors, setErrors] = useState({});

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
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
          !product.name || 
          !product.image || 
          !product.price || 
          !product.description || 
          !product.stock ||
          !product.categories ) {
          alert('Llene los campos corectamente');
          setErrors(validate({
            ...product
          }))
        }else {
        dispatch(postProduct(product));
        alert('producto creado correctamente') ; 
        history.push('/products');
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
/* 
    const moreImage = (e) => {
      e.preventDefault();
             let img = []
        setProduct({
          ...product,
          image: [...product.image],
          
        })
        
    } */

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


    const listCategory =
[
"Computadores",
"Perifericos",
"Amd",
"Intel",
"Trabajo",
"Estudio",
"Motherboard",
"Procesador",
"Disco Duro",
"Disco SSD",
"Memoria Ram",
"Fuentes",
"Refrigeracion",
"Gabinet",
"Teclad",
"Auricular",
"Mouse",
]


 
 

    
return (
  <div className='createContainer'> 
<form onSubmit={(e) => handleSubmit(e)} class="needs-validation"> 
<div className='boxInput'> 
    <h4 ><strong>Artículo en venta</strong></h4>
    {product.image && product.image.map((image) => (
      <div className='myProduct'>
        <img  src={image} alt=""/> 
        <button onClick={() => imageDelete(image)}>x</button>
      </div>
    ))}
     <div >
      <input onChange={(e) => handleImage(e)}  type="text" class="form-control"  name='image' placeholder='Imagen Url..' value={product.image} />   
      <p className='errors'><strong>{errors.image}</strong></p>

     {/* <button onClick={(e) => moreImage(e)}>Añadir mas imagen</button> */}
    </div>
    <div className='inputsError'>
      <input  onChange={(e) => handleChange(e)} value= {product.name}  type="text" class="form-control" name='name' placeholder='Titulo' />  
      <p className='errors'><strong>{errors.name}</strong></p> 
    </div>
    <div>
      <input  onChange={(e) => handleChange(e)} type="number" class="form-control" name='price' value={product.price} placeholder= 'Precio' />
      <p className='errors'><strong>{errors.price}</strong></p> 
    </div>
    <div >
      <input  onChange={(e) => handleChange(e)} type="number" class="form-control" name='stock' value={product.stock}  placeholder= 'Stock' />
      <p className='errors'><strong>{errors.stock}</strong></p>
    </div>
    <div>
      <input  onChange={(e) => handleChange(e)} type="text" class="form-control" name='description' value={product.description} placeholder='Descripcion'  />
      <p className='errors'><strong>{errors.description}</strong></p>
    </div>
    <div >

      <select class="form-control" onChange = {handleCategory}  value = {product.categories}>
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
  <button  class="btn btn-primary" type="submit">Publicar</button>
  </div>
  </div>
  <div className='product'>
   {product.image && product.image.map((img) => (
      <div className='showProduct' >
        <img  src={img} alt=""/> 
      </div>
    ))}
   <h2 className='name'>{product.name}</h2> 
  <label className='stock'>stock:{product.stock}</label> 
  <label className='price'>${product.price}</label>
  <label className='description'>{product.description}</label>
   </div>
</form>
</div>

    )
 };

 export default CreateProduct;