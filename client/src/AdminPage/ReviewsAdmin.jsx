import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../redux/actions/actionsAdmin";
import eliminar from "../assets/eliminar.png"


export default function ReviewsAdmin() {
  const reviews = useSelector((state) => state.reducerAdmin.reviews)
  console.log(reviews)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])
  return (
    <div>
      <div id="container">
        <table className="table">
          <thead>
            <tr>
              <th className="id">N°</th>
              <th>Comment</th>
              <th>Reviews</th>
               <th>Eliminar</th> 
            </tr>
          </thead>
          <tbody>
            {reviews.map((rev) =>
              <tr>
                <td >{rev.id}</td>
                <td >{rev.comment}</td>
                <td >{rev.rating}</td>
                <td ><button><img src={eliminar} alt="Eliminar" width={"18px"} /></button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )

}