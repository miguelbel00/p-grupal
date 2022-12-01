import '../styles/createproduct.css';
import Styles from "../styles/createproduct.module.css"
import { useEffect, useState } from 'react';
import { postProduct } from '../redux/actions/actionsPetitions';
import { getAllProducts } from '../redux/actions/actionsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getCategory } from '../redux/actions/actionsAdmin';
import Swal from 'sweetalert2'
import dino from '../assets/dino.png'



const CreateProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categoriesState = useSelector(state => state.reducerAdmin.categories)

  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: [],
    price: "",
    stock: "",
    categories: []
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCategory())

  }, []);
  const errorAlert = (message) => {
    Swal.fire({
      title: 'Error!',
      text: `${message}`,
      confirmButtonText: 'Try Again',
      background: '#fff',
      icon: 'error',
      customClass: {
        popup: 'popup-alert',
        text: 'titleAlert',
        content: 'titleAlert'
      },
    });
  }
  const successAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: `Product Created successfully `,
      confirmButtonText: 'Lets Go',
      background: '#fff',
      customClass: {
        popup: 'popup-alert',
        text: 'titleAlert',
        content: 'titleAlert'
      },
      imageUrl: dino,
      imageWidth: '200px',
      imageHeight: '200px'
    });
  }

  const validate = (product) => {
    let error = {};

    if (product.name.length === 0) {
      error.name = 'Please enter a valid title.'
    }
    if (product.price.length === 0) {
      error.price = 'Please enter the price of the product.'
    }
    if (product.image.length === 0) {
      error.image = 'Please enter the URL of the image.'
    }
    if (!product.image) {
      error.image = 'Invalid url'
    }

    if (!product.stock) {
      error.stock = 'Please enter the stock of the product.'
    }
    if (!product.description) {
      error.description = 'Please enter the description of the product.'
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
      !product.categories) {
      errorAlert('Please fill the inputs');
      setErrors(validate({
        ...product
      }))
    } else {
      await dispatch(postProduct(product));
      await dispatch((getAllProducts()))
      successAlert()
      history.push('/admin');
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(validate({
      ...product,
      [e.target.name]: [e.target.value]
    }))
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      categories: [...product.categories, e.target.value]

    })
  };

  const handleImage = (e) => {
    e.preventDefault();
    setProduct({
      ...product,
      image: [...product.image, e.target.value],

    })

  };


  const handleDelete = (e) => {
    setProduct({
      ...product,
      categories: product.categories.filter(category => category !== e)
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
    <div className={Styles.container}>
      <div className={Styles.containerOne}>
        <form onSubmit={(e) => handleSubmit(e)} className="needs-validation">
          <div className='boxInput'>
            <h4 ><strong>Sale product</strong></h4>
            {product.image && product.image.map((image) => (
              <div className='myProduct'>
                <img src={image} alt="" />
                <button onClick={() => imageDelete(image)}>x</button>
              </div>
            ))}
            <div >
              <input onChange={(e) => handleImage(e)} type="text" className="form-control" name='image' placeholder='Image Url..' value={product.image} />
              <p className={Styles.errors}><strong>{errors.image}</strong></p>
            </div>
            <div className='inputsError'>
              <input onChange={(e) => handleChange(e)} value={product.name} type="text" className="form-control" name='name' placeholder='Title' />
              <p className={Styles.errors}><strong>{errors.name}</strong></p>
            </div>
            <div>
              <input onChange={(e) => handleChange(e)} type="number" className="form-control" name='price' value={product.price} placeholder='Price' />
              <p className={Styles.errors}><strong>{errors.price}</strong></p>
            </div>
            <div >
              <input onChange={(e) => handleChange(e)} type="number" className="form-control" name='stock' value={product.stock} placeholder='Stock' />
              <p className={Styles.errors}><strong>{errors.stock}</strong></p>
            </div>
            <div>
              <input onChange={(e) => handleChange(e)} type="text" className="form-control" name='description' value={product.description} placeholder='Description' />
              <p className={Styles.errors}><strong>{errors.description}</strong></p>
            </div>
            <div >
              <select className="form-control" onChange={handleCategory} value={product.categories}>
                <option value="">Choose your category...</option>
                {listCategory.map && listCategory?.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select >
              {product.categories && product.categories?.map(delet => (
                <div className={Styles.category}>
                  <p>{delet}</p>
                  <button onClick={() => handleDelete(delet)} key={delet} value={delet}>X</button>
                </div>
              ))}
            </div>
            <div className='btn'>
              <button className="btn btn-primary" type="submit">Post</button>
            </div>
          </div>

        </form>
      </div>
      <div className={Styles.containerTwo}>
        <div className={Styles.containerImg}>
          {product.image && product.image.map((img) => (
            <div className={Styles.showImg} >
              <img src={img} alt="" />
            </div>
          ))}
        </div>
        <div className={Styles.showProduct}>
          <h2 >{product.name}</h2>
          <label >Price: ${product.price}</label>
          <label >Stock: {product.stock}</label>
          <label >Description: {product.description}</label>

        </div>
      </div>
    </div>

  )
};

export default CreateProduct;