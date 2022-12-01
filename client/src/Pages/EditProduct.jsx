import styles from "../styles/editProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import dino from '../assets/dino.png'
import { useHistory, useParams } from "react-router-dom";
import {
  getOneProduct,
  clearOneProduct,
  updateProduct,
} from "../redux/actions/actionsAdmin";
import Swal from "sweetalert2";

const EditProduct = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.reducerAdmin.product);
  const { productId } = useParams();
  const history = useHistory();
  useEffect(() => {
    dispatch(getOneProduct(productId));
    return () => {
      dispatch(clearOneProduct());
    };
  }, []);

  const successAlert = () => {
    Swal.fire({
      title: "Success!",
      text: `Product Edited `,
      confirmButtonText: "Lets Go",
      background: "#fff",
      customClass: {
        popup: "popup-alert",
        text: "titleAlert",
        content: "titleAlert",
      },
      imageUrl: dino,
      imageWidth: "200px",
      imageHeight: "200px",
    });
  };
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
  const [editProduct, setEditProduct] = useState({
    productId: productState ? productState.id : null,
    name: productState ? productState.name : "",
    description: productState ? productState.description : "",
    image: productState ? productState.image : "",
    price: 0,
    stock: 0,
    sold: productState ? productState.sold : 0,
  });

  const [errors, setErrors] = useState({});
  const validate = (input) => {
    let error = {};

    if (!input.price) {
      error.price = "Enter price";
    }

    if (!input.stock) {
      error.stock = "Enter stock";
    }

    return error;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    editProduct.productId = productState.id;
    editProduct.name = productState.name;
    editProduct.description = productState.description;
    editProduct.image = productState.image;
    editProduct.sold = productState.sold;

    if (
      !editProduct.productId ||
      !editProduct.name ||
      !editProduct.description ||
      !editProduct.image ||
      !editProduct.price ||
      !editProduct.stock ||
      !editProduct.sold
    ) {
      errorAlert("Please fill the inputs");
      setErrors(
        validate({
          ...editProduct,
        })
      );
    } else {
      editProduct.price = Number(editProduct.price);
      editProduct.stock = Number(editProduct.stock);
      dispatch(updateProduct(editProduct));
      successAlert();
      history.push("/admin"); 
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...editProduct,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <h4>Edit Product</h4>
        <form onSubmit={handelSubmit} className={styles.form}>
          <div>
            <label>Name</label>
            <input
              disabled
              type="text"
              className={styles.containerEmail}
              placeholder={`${productState.name}`}
              name="fullName"
              value={productState?.name}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              disabled
              type="text"
              className={styles.containerEmail}
              placeholder={`${productState.image}`}
              name="image"
              value={productState?.image}
            />
          </div>
          <div>
            <label>Sold</label>
            <input
              disabled
              type="text"
              className={styles.containerEmail}
              placeholder={`${productState.sold}`}
              name="sold"
              value={productState?.sold}
            />
          </div>
          <div className={styles.containerPassword}>
            <label>Price</label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              placeholder={`${productState.price}`}
              name="price"
              value={editProduct?.price}
            />
          </div>
          <label className={styles.error}>{errors.price}</label>
          <div className={styles.containerPassword}>
            <label>Stock</label>
            <input
              onChange={handleChange}
              className={styles.input}
              type="text"
              placeholder={`${productState.stock}`}
              name="stock"
              value={editProduct?.stock}
            />
          </div>
          <label className={styles.error}>{errors.stock}</label>
          <button className={styles.btn} type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
