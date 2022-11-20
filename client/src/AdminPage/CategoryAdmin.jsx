import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/actions/actionsAdmin";
import eliminar from "../assets/eliminar.png"

export default function CategoryAdmin() {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.reducerAdmin.categories)

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return (
        <div>
            <div id="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="id">N°</th>
                            <th>Categories</th>
                            
                             <th>Eliminar</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cat,i) =>
                            <tr key={i}>
                                <td >{cat.id}</td>
                                <td >{cat.name}</td>
                                
                                <td ><button><img src={eliminar} alt="Eliminar" width={"18px"} /></button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


