import React, { useState, useEffect }from 'react'
import { FaStar } from "react-icons/fa"
import { addReview, getDetail } from '../redux/actions/actionsPetitions'
import { useDispatch, useSelector } from 'react-redux';
import Styles from "../styles/addReview.module.css"

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
  
};

function AddReview( {productId} ) {
  const initialState = {
    productId: productId,
    userId: "",
    comment: "",
    rating: 0
  };
    
  const [review, setReview] = useState(initialState);
  const userOne = useSelector((state) => state.petitionsReducer.userOne)
  useEffect(() => {
    if (userOne) {
      setReview({
        ...review,
        userId: userOne.id
      })
    }  },[userOne]);
    
  const dispatch = useDispatch()
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setReview({
      ...review,
      rating: value
    })
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleOnChange = (e) => {
    setReview({
        ...review,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!review.rating) {return alert('The rating field is required') }
    if (!review.comment) {return alert('The comment field is required') }
    if (!review.userId) {return alert('You must log in') }
    dispatch(addReview(review))
    alert(`Review created successfully`)
    setReview({ ...initialState})
    dispatch(getDetail(productId))
  }

  return (
    <div className={Styles.container}>
        <h2>Add Review</h2>
        <div className={Styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || review.rating) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <textarea
          className={Styles.textarea}
          placeholder="What's your experience?"
          value={review.comment} 
          name='comment' 
          onChange={handleOnChange}
        />
        <button className={Styles.button} type='button' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddReview