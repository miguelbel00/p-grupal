import { useState, useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  filterCategory, orderMostSold, addCategorieFilter, deleteFilter, orderProducts } from "../redux/actions/actionsFilter";
import { getAllCategories } from '../redux/actions/actionsFilter'
import Styles from "../styles/filters.module.css"


export default function Filters({ setOption, setPage }) {
    const dispatch = useDispatch()

    const stateCategories = useSelector(state => state.filterReducer.categoriesSelected)
    const [categories, setCategories] = useState(stateCategories)
    const allCategories = useSelector(state => state.filterReducer.allCategories)

    useEffect(() => {
      dispatch(getAllCategories())
    }, [])

    function handleOrder(e) {
       dispatch(orderProducts(e.target.value))
        setPage(1)
    }

    function state(value) {
        setCategories(value)
    }

    function handleFilterCategory(e) {
        e.preventDefault();
        if(!categories.includes(e.target.value) && e.target.value !==  "Filter"){
        state([...categories, e.target.value])

        dispatch(addCategorieFilter([...categories, e.target.value]))
        dispatch(filterCategory())
        }
    }

    function deleteCategory(e) {
        dispatch(deleteFilter(e.target.name))
        setCategories([...categories.filter(cat => cat !== e.target.name)])
        dispatch(filterCategory())
    }


    return (
        <div className={Styles.container}>
            <p>Order product</p>
            <div className={Styles.price}>
                <select class="form-select form-select-lg" aria-label=".form-select-lg example" onChange={(e) => handleOrder(e)}>
                    <option value='All'>Price</option>
                    <option value='Min'>Min-Price</option>
                    <option value='Max'>Max-Price</option>
                </select>
            </div>
            <div className={Styles.sold}>
                <select class="form-select form-select-lg" aria-label=".form-select-lg example" onChange={(e) => handleOrder(e)}>
                    <option value='All'>Sold</option>
                    <option value='Less Sold'>Less Sold</option>
                    <option value='Best Seller'>Best Seller</option>
                </select>
            </div>
            <div className={Styles.filter}>
                <select class="form-select form-select-lg " aria-label=".form-select-lg example" onChange={e => handleFilterCategory(e)}>
                    <option value='Filter'>Filter</option>
                    {
                    allCategories.map(c => 
                        <option key={c.name} value={c.name}>{c.name}</option>
                    )
                    }
                </select>
            </div>
            <div className={Styles.containerFilters}>
                {stateCategories.length > 0 && stateCategories.map(categ => 
                    <div className={Styles.divDeleteCategory} >
                        <p className={Styles.categButton}>{categ}</p>
                        <button className={Styles.buttonDelete} name={categ} onClick={deleteCategory}>X</button>
                    </div>
                
                )}
            </div>
        </div>
    )
}